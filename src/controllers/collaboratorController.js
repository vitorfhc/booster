const express = require('express');

const Collaborator = require('../models/Collaborator')

const router = express.Router();

// List all collaborators
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

// Register a new collaborator
router.post('', async (req, res) => {
  try {
    const collab = await Collaborator.create(req.body);
    return res.send({ collab })
  } catch (err) {
    return res.status(400).send({
      error: 'Registration failed'
    })
  }
});

module.exports = app => app.use('/collaborators', router);
