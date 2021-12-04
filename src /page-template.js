// generate the readme body details
const generateProject = (projectArr) => {
return `
${projectArr.map(
({description,
installation,
usage,
license,
contributing,
test,
questionEmail,
questionGithub,
}) => {
return `
![Github License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue&style=for-the-badge)

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installation}

## Usage 

${usage}

## License

This project is using the ${license} license.

## Contributing

${contributing}

## Tests

${test}

## Questions

Please reach me using:

<a href = 'mailto:${questionEmail}'>My Email</a>

[My Github Account](https://github.com/${questionGithub})

`;
}
)}`;
};

// export function to generate the readme body details
module.exports = (templateData) => {
//destructure
const { project, ...header } = templateData;
//console.log("it works! this is template data:");
//console.log(templateData);
return `
# ${header.title}
${generateProject(project)}
    `;
};