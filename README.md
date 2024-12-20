# Poodie Interpreter

Poodie is a simple language interpreter that supports basic operations like assignment and arithmetic. It comes with a lexer, parser, and interpreter, and can run both via HTTP or WebSocket interfaces.

## Features

- **Lexer**: Converts input into tokens (e.g., numbers, operators, identifiers).
- **Parser**: Converts tokens into an Abstract Syntax Tree (AST).
- **Interpreter**: Executes the AST and outputs the result.

## Setup

1. Clone the repository.
2. Install dependencies:

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

/Poodie
  /core
    lexer.js
    parser.js
    interpreter.js
  /public
    (your frontend HTML/JS if needed)
  server.js
  .gitignore
  README.md


---

### **Instructions for Running:**

1. Ensure you have Node.js installed on your machine.
2. Run `npm install` to install the required dependencies.
3. Start the server using `npm start` or `node server.js`.
4. Use either the HTTP `/execute` endpoint or connect to the WebSocket server for code execution.

With this setup, you should be able to run the lexer, parser, and interpreter, either via HTTP requests or WebSocket messages, making it easy to integrate or extend for any web-based application.
