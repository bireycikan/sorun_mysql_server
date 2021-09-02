const path = require('path');
const http = require('http');
const debug = require('debug')('mysql:server');
const dotenv = require('dotenv');


// load configurations
if (process.env.NODE_ENV === 'production') dotenv.config({ path: path.join(__dirname, 'config/.env.production') });
else dotenv.config({ path: path.join(__dirname, 'config/.env.development') });


const requestHandler = (request, response) => {
  if (request.method == 'POST') {
    let body = '';
    request.on('data', function (data) {
      body += data;
    });

    request.on('end', () => {
      try {
        // body = JSON.parse(body);
        response.writeHead(200).end(body)
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