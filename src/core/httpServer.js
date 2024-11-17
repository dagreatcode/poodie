const http = require('http');

class HTTPServer {
  constructor() {
    this.server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello from HTTP Server!');
    });
  }

  listen(port) {
    this.server.listen(port, () => {
      console.log(`HTTP server running on port ${port}`);
    });
  }
}

module.exports = HTTPServer;
