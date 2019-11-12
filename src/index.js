'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/collaboratorController')(app);

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

let port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
