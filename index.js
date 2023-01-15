// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// https://github.com/suvarna28
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of the project?',
        },
        {
            type: 'input',
            name: 'installationinstructions',
            message: 'Enter the installation instructions of the project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information of the project?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contribution guidelines of the project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter the test instructions of the project?',
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'contact',
            choices: ['email', 'phone', 'telekinesis'],
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address for any questions.',
        },
    ])
    .then((data) => {
        const filename = 'README.md';
        writeToFile(filename, data);
    });

// // TODO: Create a function to write README file
const writeToFile = (filename, { title, description, installationinstructions, usage, contact, username, email }) => {
    const myreadme = `# ${title}

## Description
${ description }
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact);

## Installation 
${installationinstructions}

## Usage
${usage}

## Contact
${contact}

## Questions
https://github.com/${username}

For any additional questions email me at :${email}

`

    fs.writeFile(filename, myreadme, (err) =>
            err ? console.log(err) : console.log('Success!')
    );
}

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

