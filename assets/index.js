// requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// questions for user
const promptUser = () =>
inquirer.prompt([  
        {
            type: "input",
            message: "What do you want your project Title to be?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the description title of your readme?",
            name: "description",
        },
        {
            type: "input",
            message: "What are you installation instructions?",
            name: "installationInstructions",
        },
        {
            type: "input",
            message: "What usage information would you like to include?",
            name: "usageInformation",           
        },
        {
            type: "input",
            message: "Insert contribution guidelines.",
            name: "contributionGuidelines",            
        },
        {
            type: "input",
            message: "Input test instructions?",
            name: "testInstructions",
        },
        {
            type: "list",
            message: "What license would you like?",
            name: "license",
            choices: [
                "MIT",
                "IBM",
                "ISC",
                "Mozilla",
            ]

        },



    ])

const generateReadme = (answers) =>
`# ${ answers.title }

## License
   
  ${ answers.license}

## Description

 ${ answers.description }

## Installation Instructions

 ${ answers.installationInstructions }

## Usage Information

 ${ answers.usageInformation }

## Contribution Guidelines

 ${ answers.contributionGuidelines }

## Test Instructions

 ${ answers.testInstructions }
        
`

promptUser()
    .then((answers) => writeFileAsync("./README.md", generateReadme(answers)))
    .then (() => console.log("Success!"))
    .catch((err) => console.log(err));