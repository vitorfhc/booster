const mongoose = require('mongoose');

let host = process.env.DB_HOST || 'db';
let url = 'mongodb://' + host + '/booster';

mongoose.connect(url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;
