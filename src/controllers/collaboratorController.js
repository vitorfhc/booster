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

// Get specific collaborator
router.get('/:id', async (req, res) => {
  let _id = req.params.id;

  try {
    let collab = await Collaborator.find({ _id });
    return res.send(collab);
  } catch(err) {
    console.log(err);
    res.status(400).send({
      error: 'Failed to fetch collaborator'
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

  res.send();
});

// Edits a collaborator
router.post('/:id', async (req, res) => {
  let _id = req.params.id;

  Collaborator.updateOne(
    { _id  },
    req.body,
    (err, res) => {
      if(!err) return;
      res.status(400).send({
        error: 'Failed to edit collaborator',
      });
    }
  );

  let updated = await Collaborator.findOne({ _id });
  res.send(updated);
});

module.exports = app => app.use('/collaborators', router);
