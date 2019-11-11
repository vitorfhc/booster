const mongoose = require('../database');

const SectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {_id: false});

module.exports = SectorSchema;
