/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('djangoproject:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        projectName: "testproject"
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
        'Makefile',
        'manage.py',
        'pylama.ini',
        'requirements.txt',

        'testproject/__init__.py',
        'testproject/urls.py',
        'testproject/wsgi.py'
    ]);
  });
});
