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
        message: 'Are there any installation instructions?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide usage information.'
    },
    {
        name: 'questions',
        type: 'input',
        message: 'How to contact you with questions?'
    }
])
.then((data) => {
    function createReadme() {
     fs.writeFile('README.md', docContent, (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log(`File ${readME} has been created.`);
    }
});
}
const readME = 'README.md';
const docContent = `
# Timed-Code-Quiz

## Description

 ${data.title} to assess your knowledge of Java (currently unfinished so the Questions are all over the place)

## Image

![alt text](./Assets/nlewis742.github.io_timed-code-quiz_.png)

## Link

https://nlewis742.github.io/timed-code-quiz/


`
        createReadme();
}) 