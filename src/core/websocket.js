const WebSocket = require('ws');
const httpServer = require('./httpServer');

class WebSocketServer {
  constructor() {
    this.wss = new WebSocket.Server({ noServer: true });
    this.wss.on('connection', ws => {
      ws.on('message', message => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: ${message}`);
      });
    });
  }

  upgrade(request, socket, head) {
    this.wss.handleUpgrade(request, socket, head, ws => {
      this.wss.emit('connection', ws, request);
    });
  }
}

module.exports = WebSocketServer;
