const mongoose = require('mongoose')

mongoose.connect('mongodb://db/booster',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;
