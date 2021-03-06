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
}, {_id: false});

MetaDataSchema.pre('save', next => {
  let now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    this.created_at = now;
  }
  next();
});

module.exports = MetaDataSchema;
