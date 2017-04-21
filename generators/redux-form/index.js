'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const Case = require('case');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcom to bzapp:redux-form generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'formName',
      message: 'Form Name',
      validate: formName => {
        return (/^\w+(\/\w+)?$/).test(formName) || 'Form name should look like "MyForm" or "myFeature/MyForm"';
      }
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const destFileName = `client/scripts/react/components/${this.props.formName}.js`;
    const formsFileContents = this.fs.read(this.destinationPath('client/scripts/react/constants/Forms.js'));

    const formName = path.basename(this.props.formName);
    const formKey = Case.constant(formName);

    this.fs.copyTpl(
      this.templatePath('redux-form.js'),
      this.destinationPath(destFileName),
      {
        formName,
        formKey
      }
    );

    this.fs.copyTpl(
      this.templatePath('forms.js'),
      this.destinationPath(this.destinationPath('client/scripts/react/constants/Forms.js')),
      {
        head: formsFileContents,
        formName,
        formKey
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
