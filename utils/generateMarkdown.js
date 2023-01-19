//Function that creates the license link based on selected license

function renderLicenseLink(license) {
  var selectedLicense;
  switch (license) {
    case 'ISC':
      selectedLicense = '![License](https://img.shields.io/badge/License-ISC-yellow.svg)';
        break;
    case 'MIT':
      selectedLicense = '![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)';
        break;
    case 'Apache 2.0 License':
      selectedLicense = '![License](https://img.shields.io/badge/License-Apache_2.0-red.svg)';
        break;
    case 'Eclipse Public License 1.0':
      selectedLicense = '![License](https://img.shields.io/badge/License-EPL_1.0-blue.svg)';
        break;            
    default:
        selectedLicense = '';
  }
  return selectedLicense; 
}

// Function that creates the license note to add under 'License' section based on license selected

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
  renderLicenseLink,
  renderLicenseSection
};
