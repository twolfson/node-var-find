// Load in dependencies
var esprima = require('esprima');

// Define and export varFind
function varFind(content) {
  // Parse and walk the AST
  var ast = esprima.parse(content);
  function walk(node) {
    console.log(node);

    // If there is a body, dive down
    var children = node.body;
  }
  walk(ast);
}
module.exports = varFind;