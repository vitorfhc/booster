'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/collaboratorController')(app);

let port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
