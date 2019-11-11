const express = require('express');

const Collaborator = require('../models/Collaborator')

const router = express.Router();

router.get('/collaborators', async (req, res) => {
  let collaborators = await Collaborator.find();
  console.log(collaborators)
  return res.send(collaborators);
});

module.exports = app => app.use('/api', router);
