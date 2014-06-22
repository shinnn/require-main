'use strict';

var assert = require('assert');

var test = require('tape');

var requireMain = require('../');

test('require-main', function(t) {
  var behaviors = [
    'should load main script even if package.json doesn\'t have a "main" field.',
    'should load main script when package.json has a "main" field.',
    'should load main script even if package.json doesn\'t exist the same directory.',
    'should throw an error when "main" field points a wrong file path.',
    'should throw an error when package.json doesn\'t have a "main" field and index.js doesn\'t exist.'
  ];

  t.plan(behaviors.length);

  t.deepEqual(requireMain(), requireMain, behaviors[0]);
  process.chdir('test/fixture');
  t.deepEqual(requireMain(), 'foo', behaviors[1]);
  process.chdir('others');
  t.deepEqual(requireMain(), 'foo', behaviors[2]);
  process.chdir('../../fixture_failure/wrong_path');
  t.throws(requireMain, behaviors[3]);
  process.chdir('../no_main');
  t.throws(requireMain, behaviors[4]);

  t.end();
});
