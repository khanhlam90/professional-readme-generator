const generatePage = require("./src/page-template.js");
const { writeFile } = require ("./utils/generateMarkdown.js");
const { promptUser, promptReadme } = require ("./src/questions.js");

promptUser ()
.then (promptReadme)
.then (readmeData => {
    return generatePage(readmeData);
})
.then (insertDataToMd => {
    return writeFile(insertDataToMd);
})
.catch ( err => {
    console.log(err);
});
