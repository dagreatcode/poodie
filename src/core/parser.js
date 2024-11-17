class Parser {
    constructor(tokens) {
      this.tokens = tokens;
      this.position = 0;
      this.currentToken = this.tokens[this.position];
    }
  
    eat(type) {
      if (this.currentToken.type === type) {
        this.position++;
        this.currentToken = this.tokens[this.position];
      } else {
        throw new Error(`Expected ${type}, found ${this.currentToken.type}`);
      }
    }
  
    parseAssignment() {
      const identifier = this.currentToken.value;
      this.eat('IDENTIFIER');
      this.eat('ASSIGN');
      const value = this.currentToken.value;
      this.eat('NUMBER');
      return { type: 'ASSIGNMENT', id: identifier, value };
    }
  
    program() {
      const statements = [];
      while (this.currentToken.type !== 'EOF') {
        if (this.currentToken.type === 'IDENTIFIER') {
          statements.push(this.parseAssignment());
        }
      }
      return statements;
    }
  }
  
  module.exports = Parser;
  