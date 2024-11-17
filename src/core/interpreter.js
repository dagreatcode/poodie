class Interpreter {
    constructor(ast) {
      this.ast = ast;
      this.variables = {};
    }
  
    evaluateExpression(expr) {
      // Simple expression evaluator: "x + y"
      const tokens = expr.split(' ');
      const left = this.variables[tokens[0]];
      const operator = tokens[1];
      const right = this.variables[tokens[2]];
      
      switch (operator) {
        case '+':
          return left + right;
        case '-':
          return left - right;
        case '*':
          return left * right;
        case '/':
          return left / right;
        default:
          throw new Error(`Unknown operator: ${operator}`);
      }
    }
  
    interpret() {
      this.ast.forEach(node => {
        if (node.type === 'ASSIGNMENT') {
          const value = isNaN(node.value) ? this.evaluateExpression(node.value) : parseInt(node.value, 10);
          this.variables[node.id] = value;
        }
      });
      return this.variables;
    }
  }
  
  module.exports = Interpreter;
  