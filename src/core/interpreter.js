class Interpreter {
  constructor(ast) {
    this.ast = ast;
    this.memory = {}; // Store variable values
  }

  // Helper function to evaluate expressions (addition for now)
  evaluateExpression(expr) {
    // Split expression by spaces, e.g., "x + y" -> ["x", "+", "y"]
    const tokens = expr.split(" ");

    // Let's assume simple binary operations for now: x + y
    let left = this.memory[tokens[0]]; // value of 'x'
    let operator = tokens[1]; // '+' or any other operator
    let right = this.memory[tokens[2]]; // value of 'y'

    // Perform the operation based on the operator
    if (operator === "+") {
      return left + right;
    }
    // More operators can be added here (e.g., '-', '*', '/')
    else {
      throw new Error(`Unsupported operator: ${operator}`);
    }
  }

  interpret() {
    // Loop through each statement in the AST
    this.ast.forEach((statement) => {
      if (statement.type === "ASSIGNMENT") {
        const id = statement.id;
        const value = statement.value;

        // If value is a string expression (e.g., 'x + y'), evaluate it
        if (typeof value === "string") {
          const result = this.evaluateExpression(value);
          this.memory[id] = result; // Store result in memory
        } else {
          this.memory[id] = value; // Direct assignment (e.g., x = 10)
        }
      }
    });

    return this.memory;
  }
}

module.exports = Interpreter;
