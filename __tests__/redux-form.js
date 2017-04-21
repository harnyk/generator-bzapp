'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-bzapp:redux-form', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/redux-form'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
