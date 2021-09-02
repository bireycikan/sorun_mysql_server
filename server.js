const express = require('express');
const app = express();
const debug = require('debug')('mysql:server');



const port = process.env.PORT || 3306;
app.listen(port, () => {
  debug(`MySql server is listening on port ${port}`);
})