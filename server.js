const path = require('path');
const http = require('http');
const debug = require('debug')('mysql:server');
const dotenv = require('dotenv');


// load configurations
if (process.env.NODE_ENV === 'production') dotenv.config({ path: path.join(__dirname, 'config/.env.production') });
else dotenv.config({ path: path.join(__dirname, 'config/.env.development') });


// initialize db manager
const dbManager = require('./db/manager');


const requestHandler = (request, response) => {
  if (request.method == 'POST') {
    let body = '';
    request.on('data', function (data) {
      body += data;
    });

    request.on('end', () => {
      try {
        body = JSON.parse(body);
        dbManager.processRequest(body, function (err, result) {
          if (!err) {
            return response
              .writeHead(200, { 'Content-Type': 'application/json' })
              .end(JSON.stringify(result));
          }

          response
            .writeHead(400, { 'Content-Type': 'application/json' })
            .end(err)
        })
      }
      catch (e) {
        response.writeHead(400).end("Bad Request");
      }
    });
  }
  else {
    response.end("Request method must be POST");
  }
}


const server = http.createServer(requestHandler);

const port = 5433;
server.listen(port, () => {
  debug(`MySql server is listening on port ${port}`);
})