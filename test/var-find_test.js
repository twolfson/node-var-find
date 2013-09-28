// Load in dependencies and library
var fs = require('fs'),
    assert = require('assert'),
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
      // [{var abc;}]
      var testFile = fs.readFileSync(testDir + '/' + filename, 'utf8');

      // Extract the var groups
      var groupStartRegExp = /\[/g;
      while (true) {
        // Find the next match
        // `[` + {var abc;}]
        var groupStart = groupStartRegExp.exec(testFile);

        // If there was no match, stop
        if (!groupStart) {
          break;
        }

        // Remove the starting piece
        // {var abc;}]

        // Find the group end


        // TODO: Assert groupEnd

        // Extract each var piece
        var group = [],
            varStartRegExp = /{/g;
        while (true) {
          // var varStart = varStartRegExp.exec(
          break;
        }
      }
    });
  });
  it('', function () {

  });
});
