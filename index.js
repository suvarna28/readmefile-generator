// Packages required by the application
const inquirer = require('inquirer');
const fs = require('fs');

// Function that writes the content entered by user to the README file
const writeToFile = (filename, { title, description, installationinstructions, usage, license, username, email }) => {

    var selectedLicense;

    switch (license) {
        case 'ISC':
            selectedLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'MIT':
            selectedLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache 2.0 License':
            selectedLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Eclipse Public License 1.0':
            selectedLicense = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;            
        default:
            selectedLicense = 'No license was selected';
    }

    const myreadme = `# ${title}                       

## Description
${description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Installation 
${installationinstructions}

## Usage
${usage}

## License
${selectedLicense}

## Questions
https://github.com/${username}

For any additional questions email me at : ${email}

`
    fs.writeFile(filename, myreadme, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function that uses inquirer package's prompt method to ask a series of questions to the users to create the README file
function init() { 
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
            message: 'Please select a license.',
            name: 'license',
            choices: ['ISC', 'MIT', 'Apache 2.0 License', 'Eclipse Public License 1.0'],
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
}

// Function call that initializes the app
init();

