const mongoose = require('mongoose');

let url = 'mongodb://db/booster';

mongoose.connect(url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;
