'use strict';

var path = require('path');
var cwd = require('cwd');

module.exports = function requireMain() {
  var pkdDir = cwd();
  var mainPath = require(pkdDir + '/package.json').main || 'index.js';
  return require(pkdDir + '/' + mainPath);
};
