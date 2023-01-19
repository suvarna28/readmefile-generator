//Function to create the badge based on selected license
function renderLicenseBadge(license) {
  var badge;
  switch (license) {
    case 'ISC':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
        break;
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
        break;
    case 'Apache 2.0 License':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
        break;
    case 'Eclipse Public License 1.0':
      badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
        break;            
    default:
      badge = '';
  }
  return badge; 
}

//Function that creates the license link based on selected license
function renderLicenseLink(license) {
  var selectedLicense;
  switch (license) {
    case 'ISC':
      selectedLicense = '(https://opensource.org/licenses/ISC)';
        break;
    case 'MIT':
      selectedLicense = '(https://opensource.org/licenses/MIT)';
        break;
    case 'Apache 2.0 License':
      selectedLicense = '(https://opensource.org/licenses/Apache-2.0)';
        break;
    case 'Eclipse Public License 1.0':
      selectedLicense = '(https://opensource.org/licenses/EPL-1.0)';
        break;            
    default:
        selectedLicense = '';
  }
  return selectedLicense; 
}

// Function that creates the license note to add under 'License' section based on selected license
function renderLicenseSection(license) {
  var licenseNote;
  switch (license) {
    case 'ISC':
      licenseNote = 'The application is covered under ISC License';
        break;
    case 'MIT':
      licenseNote = 'The application is covered under MIT License';
        break;
    case 'Apache 2.0 License':
      licenseNote = 'The application is covered under Apache-2.0 License';
        break;
    case 'Eclipse Public License 1.0':
      licenseNote = 'The application is covered under EPL-1.0 License';
        break;            
    default:
      licenseNote = '';
  }
  return licenseNote; 
}

module.exports = { 
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
