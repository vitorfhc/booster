const mongoose = require('../database')

const CollaboratorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Collaborator = mongoose.model('Collaborator', CollaboratorSchema);

module.exports = Collaborator;
