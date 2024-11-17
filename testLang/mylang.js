const http = require('http');
const vm = require('vm');  // Use Node.js vm module to run JavaScript dynamically

// Example of a simple language runtime
function runMyLangCode(code) {
  // Code parsing and transforming your language into JS code could happen here
  const jsCode = `console.log("Running my custom language code: ${code}");`;
  
  // Use the vm module to run the generated JavaScript code
  vm.runInNewContext(jsCode, { console });
}

// Test your interpreter
const myCode = 'Hello, World!';
runMyLangCode(myCode);

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from my new server-side language!');
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
