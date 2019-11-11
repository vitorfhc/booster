const express = require('express');

const Collaborator = require('../models/collaborator');

const router = express.Router();

// Lists all collaborators
// TODO: Pagination
router.get('', async (req, res) => {
  try {
    let collaborators = await Collaborator.find();
    return res.send(collaborators);
  } catch (err) {
    return res.status(400).send({
      error: 'Something went wrong'
    });
  }
});

// Registers a new collaborator
router.post('', async (req, res) => {
  try {
    const collab = await Collaborator.create(req.body);
    collab.metadata = {};

    return res.send({ collab });
  } catch (err) {
    return res.status(400).send({
      error: 'Registration failed'
    });
  }
});

// Deletes a collaborator
router.delete('/:id', async (req, res) => {
  let _id = req.params.id;
  Collaborator.deleteOne({ _id }, err => {
    if(!err) return;
    res.status(400).send({
      error: 'Delete request failed'
    });
  });
  res.status(200).send();
});

module.exports = app => app.use('/collaborators', router);
