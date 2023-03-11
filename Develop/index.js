// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();




const inquirer = require('inquirer');
const fs = require('fs');


inquirer
.prompt([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Write a short description of your project.'
    },
    {
        name: 'install',
        type: 'input',
        message: 'What are the installation instructions?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide usage information.'
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'How to contribute to this project?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Which license is being used?',
        choices: ['MIT','Unlicense', 'BSD', 'Apache']
    },
    {
        name: 'tests',
        type: 'input',
        message: 'What tests are involved in this project?'
    },
    {
        name: 'questions',
        type: 'input',
        message: 'How can someone contact you with questions?'
    },
    {
        name: 'username',
        type: 'input',
        message: 'What is your github username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your buisness email?'
    }
])
.then((data) => {
    function createReadme() {
     fs.writeFile('sample_README.md', docContent, (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log(`File ${readME} has been created.`);
    }
});
}
const readME = 'README.md';
const docContent = `


# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contibute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description

 ${data.description}


## Installation

${data.install}

## Usage

${data.usage}

## Contribute

${data.contribute}

## License

[${data.license} license](https://opensource.org/licenses/${data.license})

## Tests

${data.tests}

## Questions

If you have questions you can reach me at ${data.email}.\n

You can also see more of my projects at https://github.com/${data.username}.


`
        createReadme();
}) 