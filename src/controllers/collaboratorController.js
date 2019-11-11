const express = require('express');

const Collaborator = require('../models/Collaborator')

const router = express.Router();

// List all collaborators
// TODO: Pagination
router.get('/collaborators', async (req, res) => {
  try {
    let collaborators = await Collaborator.find();
    return res.send(collaborators);
  } catch (err) {
    return res.status(400).send({
      error: 'Something went wrong'
    });
  }
});

module.exports = app => app.use('/api', router);
