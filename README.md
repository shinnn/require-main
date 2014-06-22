# require-main

[![NPM version](https://badge.fury.io/js/require-main.svg)](http://badge.fury.io/js/require-main)
[![Build Status](https://travis-ci.org/shinnn/require-main.svg?branch=master)](https://travis-ci.org/shinnn/require-main)
[![Dependency Status](https://david-dm.org/shinnn/require-main.svg)](https://david-dm.org/shinnn/require-main)
[![devDependency Status](https://david-dm.org/shinnn/require-main/dev-status.svg)](https://david-dm.org/shinnn/require-main#info=devDependencies)

A [Node](http://nodejs.org/) module to load the [main][main] script of your project simply

## Overview

*require-main* is useful for developing npm modules. When we write a test for a npm module, usually we should load the module itself with [`require()`](http://nodejs.org/api/modules.html#modules_modules) by specifying the [`main`][main] script path explicitly, as below:

```javascript
var yourLib = require('./'); // Or, something like "../lib/runner.js"

assert(yourLib, 'Your module is loaded.');
```

Instead of such a hard coding, we can use *require-main* to load the [`main`][main] module easily.

```javascript
var yourLib = require('require-main')();

assert(yourLib, 'Your module is loaded.');
```

*require-main* offers the following advantages:

* It keeps your test code simple even if your test directory has a complicated structure.
* It prevents your `package.json` from having a wrong `main` field.
  * `require-main()` throws an error if there is no script files in the `main` path.

## Installation

Install with [npm](https://github.com/npm/npm#npm1----node-package-manager). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm install --save-dev require-main
```

## Usage

```javascript
var requireMain = require('require-main');
var yourLib = requireMain();
```

Or, even shorter:

```javascript
var yourLib = require('require-main')();
```

`requireMain()` returns the `main` module of the first `package.json` in the [`__dirname`](http://nodejs.org/docs/latest/api/globals.html#globals_dirname) directory or the nearest parent directory.

If the `package.json` has no [`main`][main] field, `requireMain()` tries to load `index.js` in the current working directory.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).

[main]: https://www.npmjs.org/doc/package.json.html#main
