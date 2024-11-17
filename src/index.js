const Lexer = require('./core/lexer');
const Parser = require('./core/parser');
const Interpreter = require('./core/interpreter');

function run(input) {
  // Step 1: Tokenize the input
  const lexer = new Lexer(input);
  const tokens = lexer.tokenize();
  console.log('Tokens:', tokens);

  // Step 2: Parse the tokens into an Abstract Syntax Tree (AST)
  const parser = new Parser(tokens);
  const ast = parser.program();
  console.log('AST:', ast);

  // Step 3: Interpret the AST
  const interpreter = new Interpreter(ast);
  const result = interpreter.interpret();
  console.log('Result:', result);
}

// Example usage
const input = `
  x = 10;
  y = 20;
  z = x + y;
`;

run(input);
