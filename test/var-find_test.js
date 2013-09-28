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
    describe('parsing ' + filename, function () {
      before(function () {
        // Load in the file contents
        // [{var abc;}]
        var testFile = fs.readFileSync(testDir + '/' + filename, 'utf8'),
            testChars = testFile.split('');

        // Extract the var groups
        var groups = [];
        while (true) {
          // Find the next group start
          // `[` + {var abc;}]
          var groupStart = testChars.indexOf('[');

          // If there was no match, stop
          if (groupStart === -1) {
            break;
          }

          // Remove the starting piece
          // {var abc;}]
          console.log('a', groupStart, testChars.join(''));
          testChars.splice(groupStart, 1);

          // Find the group end
          // {var abc;} + `]`
          var groupEnd = testChars.indexOf(']');
          assert.notEqual(groupEnd, -1, 'Group starting at "' + groupStart + '" did not have an end.');

          // Remove the group end
          testChars.splice(groupEnd, 1);
          console.log('b', groupEnd);

          // Extract each var piece
          var vars = [];
          while (true) {
            // Find the next var start
            // `{` + var abc;}]
            var varStart = testChars.indexOf('{');
            console.log('yyy', varStart, groupEnd);

            // If there was no match or we have gone beyond the group end, stop
            if (varStart === -1 || varStart >= groupEnd) {
              break;
            }

            // Remove the starting piece
            // var abc;}]
            testChars.splice(varStart, 1);
            groupEnd -= 1;

            // Find the var end
            // var abc; + `}` + ]
            var varEnd = testChars.indexOf('}');
            assert.notEqual(varEnd, -1, '`var` starting at "' + varStart + '" did not have an end.');

            // If we have gone beyond the group end, stop
            if (varEnd >= groupEnd) {
              break;
            }

            // Remove the var end
            testChars.splice(varEnd, 1);
            groupEnd -= 1;

            // Collect the var start and end
            vars.push({
              start: varStart,
              end: varEnd
            });
          }

          // Save the vars for later
          groups.push({
            vars: vars,
            start: groupStart,
            end: groupEnd
          });
        }

        // Collect chars
        var content = testChars.join('');

        // If there are any special chars remaining, complain
        console.log('end', content);
        var specialMatch = content.match(/\[|{|}|\]/);
        assert.strictEqual(specialMatch, null);

      });

      it('contains expected groups of variables', function () {

      });
    });
  });
});
