/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('nikita:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
		template: "custom",
        sassCompiler: "compass",
        private: true,
        name: "testrun" + (new Date()).getTime(),
        nikitaCssMixins: [],
        useBuildFolders: true,
        nikitaCssExtends: [],
        features: []
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'source/sass/styles.scss'
    ]);
  });
});
