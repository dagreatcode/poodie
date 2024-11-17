const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const Lexer = require("./src/core/lexer");
const Parser = require("./src/core/parser");
const Interpreter = require("./src/core/interpreter");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware to serve static files for the web interface (optional)
app.use(express.static("public"));

// HTTP endpoint for code execution
app.post("/execute", express.json(), (req, res) => {
  const { code } = req.body;

  try {
    const lexer = new Lexer(code);
    const tokens = lexer.tokenize();
    console.log("Tokens:", tokens);

    const parser = new Parser(tokens);
    const ast = parser.program();
    console.log("AST:", ast);

    const interpreter = new Interpreter(ast);
    const result = interpreter.interpret();

    res.json({ success: true, result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// WebSocket connection handler
wss.on("connection", (ws) => {
  console.log("Client connected via WebSocket");

  ws.on("message", (message) => {
    console.log("Received:", message);
    try {
      const lexer = new Lexer(message);
      const tokens = lexer.tokenize();
      console.log("Tokens:", tokens);

      const parser = new Parser(tokens);
      const ast = parser.program();
      console.log("AST:", ast);

      const interpreter = new Interpreter(ast);
      const result = interpreter.interpret();

      ws.send(JSON.stringify({ success: true, result }));
    } catch (err) {
      ws.send(JSON.stringify({ success: false, error: err.message }));
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Start the HTTP and WebSocket server
server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
