const db = require('../');
const debug = require('debug')('mysql:server');

function processRequest(bodyData, callback) {
  const { operation, model } = bodyData;

  if (!operation) return callback('operation property is required!');
  if (!model) return callback('model property is required!');

  callback(null, { operation, model })
}

module.exports = processRequest;