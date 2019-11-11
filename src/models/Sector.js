const mongoose = require('../database')

const SectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = SectorSchema;
