const Lexer = require('./lexer');
const Parser = require('./parser');
const Interpreter = require('./interpreter');

function runMyLangCode(code) {
  const lexer = new Lexer(code);
  const tokens = lexer.tokenize();
  const parser = new Parser(tokens);
  const ast = parser.parse();
  const interpreter = new Interpreter();
  interpreter.interpret(ast);
}

module.exports = { runMyLangCode };
