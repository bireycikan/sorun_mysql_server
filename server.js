const path = require('path');
const express = require('express');
const app = express();
const debug = require('debug')('mysql:server');
const dotenv = require('dotenv');


// load configurations
if (process.env.NODE_ENV === 'production') dotenv.config({ path: path.join(__dirname, 'config/.env.production') });
else dotenv.config({ path: path.join(__dirname, 'config/.env.development') });

// connect to db
const dbConnection = require('./db/connection')();
dbConnection.connect((err) => {
  if (err) {
    return debug('Connection error: %o', err.stack);
  }

  debug('Successfuly connected to DB...');
})



const port = process.env.PORT || 3306;
app.listen(port, () => {
  debug(`MySql server is listening on port ${port}`);
})