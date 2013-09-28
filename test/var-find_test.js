// Load in dependencies and library
var fs = require('fs'),
    varFind = require('../lib/var-find.js');

// Load in test files
var testDir = __dirname + '/test_files',
    testFiles = fs.readdirSync(testDir);

// Define our test suite
describe('var-find', function () {
  // Iterate over the test files (cases)
  testFiles.forEach(function (filename) {
    before(function () {
      // Load in the file contents
      var testFile = fs.readFileSync(testDir + '/' + filename, 'utf8');

      // Extract the var groups
      var groupStartRegExp = /\[/g;
      while (true) {
        // Find the next match
        var groupStart = groupStartRegExp.exec(testFile);

        // If there was no match, stop
        if (!groupStart) {
          break;
        }

        // Extract each var piece
        var group = [],
            varStartRegExp = /{/g;
        while (true) {
          var
        }
      }
    });
  });
  it('', function () {

  });
});
