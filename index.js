const generatePage = require("./src-1/page-template.js");
const { promptUser, promptReadme } = require ("./src-1/questions.js");
const { writeFile } = require ("./utils/generateMarkdown.js");

promptUser()
.then(promptReadme)
.then(readmeData => {
    return generatePage(readmeData);
})
.then(insertDataToMd => {
    return writeFile(insertDataToMd);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch( err => {
    console.log(err);
});
