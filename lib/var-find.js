// Load in dependencies
var falafel = require('falafel');

// Define and export varFind
function varFind(content) {
  // Create placeholder for groups
  var groups = [];

  // Walk the AST
  falafel(content, function varFindFn (node) {
    // If the node is a variable declaration
    if (node.type === 'VariableDeclaration') {
      // Look at its declaractions
      var declarations = node.declarations || [];

      // Iterate over the declarations
      var vars = declarations.map(function walkDeclarations (declaration) {
        // Save start and end
        return {
          start: declaration.range[0],
          end: declaration.range[1]
        };
      });

      // Save the declarations
      groups.push({
        vars: vars,
        start: node.range[0],
        end: node.range[1]
      });
    }
  });

  // Return the groups
  return groups;
}
module.exports = varFind;