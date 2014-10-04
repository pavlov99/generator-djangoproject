'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var foldername = path.basename(process.cwd());

var DjangoprojectGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the spectacular Djangoproject generator!'
    ));

    var prompts = [{
      name: 'projectName',
      message: 'What is your project name?',
      default: foldername
    }];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir(this.projectName);
      this.dest.mkdir(path.join(this.projectName, 'settings'));
    },

    projectfiles: function () {
      this.template('manage.py', 'manage.py');
      this.src.copy('Makefile', 'Makefile');
      this.template('pylama.ini', 'pylama.ini');
      this.src.copy('requirements.txt', 'requirements.txt');
      this.src.copy('project/__init__.py', path.join(this.projectName, '__init__.py'));
      this.src.copy('project/urls.py', path.join(this.projectName, 'urls.py'));
      this.template('project/wsgi.py', path.join(this.projectName, 'wsgi.py'));
    },

    settings: function() {
      this.src.copy('project/settings/__init__.py', path.join(this.projectName, 'settings', '__init__.py'));
      this.template('project/settings/core.py', path.join(this.projectName, 'settings', 'core.py'));
      this.src.copy('project/settings/project.py', path.join(this.projectName, 'settings', 'project.py'));
      this.src.copy('project/settings/dev.py', path.join(this.projectName, 'settings', 'dev.py'));
      this.src.copy('project/settings/test.py', path.join(this.projectName, 'settings', 'test.py'));
    
    }
  }

  //end: function () {
    //this.installDependencies();
  //}
});

module.exports = DjangoprojectGenerator;
