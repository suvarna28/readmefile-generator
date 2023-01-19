// Packages required by the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Function that creates the README file and writes the content entered by the user to the file
const writeToFile = (filename, { title, description, installationinstructions, usage, contributing, tests, license, username, email }) => {

    var selectedLicense = generateMarkdown.renderLicenseBadge(license) + '' + generateMarkdown.renderLicenseLink(license);

    var licenseNote = generateMarkdown.renderLicenseSection(license);

    const myreadme = `# ${title} ${selectedLicense}                   

## Description
${description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation 
${installationinstructions}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${licenseNote}

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
    inquirer.prompt([
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
        const filename = './Output/README.md';
        writeToFile(filename, data);
    });
}

// Function call that initializes the app
init();

