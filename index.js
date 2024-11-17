const WebSocket = require('ws');

// Connect to your WebSocket server
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connected to WebSocket server!');
  ws.send('Hello from Node.js client!');
});

ws.on('message', (message) => {
  console.log('Received from server:', message);
});

ws.on('close', () => {
  console.log('Disconnected from WebSocket server.');
});
