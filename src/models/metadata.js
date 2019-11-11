const mongoose = require('../database');

const MetaDataSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

MetaDataSchema.pre('save', next => {
  now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    created_at = now;
  }
  next();
});

module.exports = MetaDataSchema;
