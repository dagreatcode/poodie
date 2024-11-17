# Poodie

Poodie is a simple custom language interpreter with WebSocket and HTTP server integration.

## Features:
- **Custom Language Interpreter**: 
  - Variables, arithmetic operations, assignments, and conditionals.
  - Supports `if-else` blocks.
  - Functionality for basic arithmetic.
  
- **WebSocket Server**: Echoes messages back to clients.
- **HTTP Server**: Serves a simple "Hello from HTTP Server" response.

## Getting Started:

1. Clone the repository.
2. Run the following command to install dependencies:
   ```bash
   npm install
```

Poodie/
│
├── src/
│   ├── core/
│   │   ├── lexer.js
│   │   ├── parser.js
│   │   ├── interpreter.js
│   │   ├── runtime.js
│   │   ├── websocket.js
│   │   ├── httpServer.js
│   ├── index.js
├── README.md

