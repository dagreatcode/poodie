class Parser {
    constructor(tokens) {
      this.tokens = tokens;
      this.position = 0;
      this.currentToken = this.tokens[this.position];
    }
  
    eat(tokenType) {
      if (this.currentToken.type === tokenType) {
        this.position++;
        this.currentToken = this.tokens[this.position] || { type: 'EOF' }; // Safe fallback to EOF
      } else {
        throw new Error(`Expected ${tokenType}, found ${this.currentToken.type}`);
      }
    }
  
    factor() {
      if (this.currentToken.type === 'NUMBER') {
        const value = this.currentToken.value;
        this.eat('NUMBER');
        return value;
      } else if (this.currentToken.type === 'IDENTIFIER') {
        const id = this.currentToken.value;
        this.eat('IDENTIFIER');
        return id;
      } else {
        throw new Error(`Unexpected token: ${this.currentToken.type}`);
      }
    }
  
    expression() {
      let result = this.factor();
  
      while (this.currentToken.type === 'PLUS' || this.currentToken.type === 'MINUS') {
        const operator = this.currentToken;
        this.eat(operator.type);
        const right = this.factor();
        if (operator.type === 'PLUS') {
          result = `${result} + ${right}`;
        } else if (operator.type === 'MINUS') {
          result = `${result} - ${right}`;
        }
      }
  
      return result;
    }
  
    statement() {
      const id = this.currentToken.value;
      this.eat('IDENTIFIER');
      this.eat('ASSIGN');
      const value = this.expression();
      this.eat('SEMICOLON');
      return { type: 'ASSIGNMENT', id, value };
    }
  
    program() {
      const statements = [];
      while (this.currentToken.type !== 'EOF') {
        statements.push(this.statement());
      }
      return statements;
    }
  }
  
  module.exports = Parser;
  