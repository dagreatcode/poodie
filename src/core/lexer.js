class Lexer {
    constructor(input) {
      this.input = input;
      this.position = 0;
      this.currentChar = this.input[this.position];
    }
  
    advance() {
      this.position++;
      if (this.position < this.input.length) {
        this.currentChar = this.input[this.position];
      } else {
        this.currentChar = null;
      }
    }
  
    skipWhitespace() {
      while (this.currentChar && /\s/.test(this.currentChar)) {
        this.advance();
      }
    }
  
    readNumber() {
      let result = '';
      while (this.currentChar && /\d/.test(this.currentChar)) {
        result += this.currentChar;
        this.advance();
      }
      return parseInt(result, 10);
    }
  
    readIdentifier() {
      let result = '';
      while (this.currentChar && /[a-zA-Z_]/.test(this.currentChar)) {
        result += this.currentChar;
        this.advance();
      }
      return result;
    }
  
    tokenize() {
      const tokens = [];
      while (this.currentChar) {
        this.skipWhitespace();
        if (/\d/.test(this.currentChar)) {
          tokens.push({ type: 'NUMBER', value: this.readNumber() });
        } else if (this.currentChar === '+') {
          tokens.push({ type: 'PLUS', value: '+' });
          this.advance();
        } else if (this.currentChar === '-') {
          tokens.push({ type: 'MINUS', value: '-' });
          this.advance();
        } else if (this.currentChar === '*') {
          tokens.push({ type: 'STAR', value: '*' });
          this.advance();
        } else if (this.currentChar === '/') {
          tokens.push({ type: 'SLASH', value: '/' });
          this.advance();
        } else if (this.currentChar === '=') {
          tokens.push({ type: 'ASSIGN', value: '=' });
          this.advance();
        } else if (this.currentChar === ';') {
          tokens.push({ type: 'SEMICOLON', value: ';' });
          this.advance();
        } else if (this.currentChar === '(') {
          tokens.push({ type: 'LPAREN', value: '(' });
          this.advance();
        } else if (this.currentChar === ')') {
          tokens.push({ type: 'RPAREN', value: ')' });
          this.advance();
        } else if (/[a-zA-Z_]/.test(this.currentChar)) {
          tokens.push({ type: 'IDENTIFIER', value: this.readIdentifier() });
        } else {
          throw new Error(`Unexpected character: ${this.currentChar}`);
        }
      }
      tokens.push({ type: 'EOF' });
      return tokens;
    }
  }
  
  module.exports = Lexer;
  