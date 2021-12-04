const inquirer - require("inquirer");


//prompt user's input for projet title
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "title",
            message: "Enter your project title (REQUIRED)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter your project title!');
                    return false;
                }
            }        
        }

    ]);
};

//prompt user's input for projet details
const promptReadme = readmeData => {
    console.log (`
    ===================================
    Begin Section 'Project Description'
    ===================================
    `);

    // set the input array 
    if (!readmeData.project) {
    readmeData.project = [];
    }

    return inquirer.prompt ([
        {
            type: "input",
            name: "description",
            message: "Enter detailed description of your project (REQUIRED)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log ('Please enter project description!');
                    return false;
                }
            } 
        },
        onsole.log(`
        =================================
        Begin Section 'Table of Contents'
        =================================
        `
        ),
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions (REQUIRED)",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log ('Please enter installation instructions!');
                    return false;
                }
            } 
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage information (REQUIRED)",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log ('Please enter usage information!');
                    return false;
                }
            } 
        },
        {
            type: "list",
            name: "license",
            message: "Which license should your project have? (Select one of the below)",
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter contributing information (REQUIRED)",
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log ('Please enter contributing information!');
                    return false;
                }
            } 
        },
        {
            type: "input",
            name: "test",
            message: "Enter test instructions (REQUIRED)",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log ('Please enter test instructions!');
                    return false;
                }
            } 
        },
        {
            type: "input",
            name: "questionEmail",
            message: "Best contact EMAIL to contact you, in case there are questions (REQUIRED)",
            validate: questionEmailInput => {
                if (questionEmailInput) {
                    return true;
                } else {
                    console.log ('Please enter EMAIL!');
                    return false;
                }
            } 
        },
        {
            type: "input",
            name: "questionGithub",
            message: "Enter your Github username (REQUIRED)",
            validate: questionGithubInput => {
                if (questionGithubInput) {
                    return true;
                } else {
                    console.log ('Please enter Github username!');
                    return false;
                }
            } 
        },
    ])
    .then (projectData => {
        readmeData.project.push(projectData);
        if (projectData) {
            return readmeData;
        }
    })
};