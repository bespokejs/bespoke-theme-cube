[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-theme-cube.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-theme-cube)

# bespoke-theme-cube

Cube theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

> **Please note:** This theme is in beta and designed for use with a future release of Bespoke.js

## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/markdalgleish/bespoke-theme-cube/master/dist/bespoke-theme-cube.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-theme-cube/master/dist/bespoke-theme-cube.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube');

bespoke.from('#presentation', [
  cube()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins['theme-cube']()
]);
```

## Credits

This theme was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
