const db = require('../');
const fakeData = require('../fakeDB');
const async = require('async');
const debug = require('debug')('mysql:server')

const conn = db.connection;

const tables = ['Branches', 'Roles', 'Users']

function populateTable(table, callback) {
  conn.query(`SELECT COUNT(*) FROM ${table}`, function (err, results) {
    if (err) return callback(err);

    if (results && results.length && results[0]['COUNT(*)']) return callback(`${table} is not empty!`);
    else {
      conn.query(fakeData[table], function (err, results) {
        if (err) return callback(err);

        callback(null);
      })
    }
  })
}

function populateDb() {
  conn.connect((err) => {
    if (err) return debug('Connection error: %o', err);

    async.each(tables, populateTable, function (err) {
      if (err) {
        debug('Populate Error: %o', err);
      }
      else {
        debug('Successfuly populated.');
      }
    })
  })
}

module.exports = {
  populateDb
}

