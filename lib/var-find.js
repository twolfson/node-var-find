// Load in dependencies
var falafel = require('falafel');

// Define and export varFind
function varFind(content) {
  // Walk the AST
  falafel(content, function varFindFn (node) {
    // If the node is a variable declaration
    if (node.type === 'VariableDeclaration') {
      // Look at its declaractions
      console.log(node.declarations);
    }
  });
}
module.exports = varFind;