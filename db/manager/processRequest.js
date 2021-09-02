const db = require('../');
const debug = require('debug')('mysql:server');

const conn = db.connection;

function processRequest(bodyData, callback) {
  const { operation, model } = bodyData;

  if (!operation) return callback('operation property is required!');
  if (!model) return callback('model property is required!');

  if (operation === 'GET') {
    let db_query = `SELECT * FROM ${model.name}`;
    if (!model.isMultiple) {
      db_query += ` WHERE `;

      const fields = Object.keys(model.fields);
      for (let i = 0; i < fields.length; i++) {
        if (i === fields.length - 1) {
          db_query += `${fields[i]}='${model.fields[fields[i]]}';`;
        }
        else {
          db_query += `${fields[i]}='${model.fields[fields[i]]}' AND `;
        }
      }
    }


    conn.query(db_query, function (err, results) {
      if (err) return callback(err);
      if (results && !results.length) return callback(null, { success: false, message: "There is no record found." });

      callback(null, results);
    })
  }
}

module.exports = processRequest;