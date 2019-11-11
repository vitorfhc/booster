const mongoose = require('../database')

const SectorSchema = require('./sector')
const MetaDataSchema = require('./metadata')

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
    min: 0,
  },
  sectors: [SectorSchema],
  metadata: MetaDataSchema,
});

const Collaborator = mongoose.model('Collaborator', CollaboratorSchema);

module.exports = Collaborator;
