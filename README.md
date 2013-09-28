# var-find

Find and return indexes of variable declarations.

This was built to run inside of [twolfson/sublime-js-var-shortcuts][], a [Sublime Text][] plugin to make dealing with adding/removing `vars` easier.

[twolfson/sublime-js-var-shortcuts]: https://github.com/twolfson/sublime-js-var-shortcuts
[Sublime Text]: http://sublimetext.com/

## Getting Started
Install the module with: `npm install var-find`

```javascript
var varFind = require('var-find');
varFind(function () {
  var abc = 123;

  console.log('hi');
} + '');
```

## Documentation
`varFind` is a function that takes in a JS source code.

```js
varFind(script
```

## Examples
_(Coming soon)_

## Donating
Support this project and [others by twolfson][gittip] via [gittip][].

[![Support via Gittip][gittip-badge]][gittip]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip]: https://www.gittip.com/twolfson/

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## Unlicense
As of Sep 27 2013, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
