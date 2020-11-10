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
        {
            type: "input",
            message: "What is your Github username?",
            name: "github",

        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",

        },



    ])

const generateReadme = (answers) =>
`# ${ answers.title }

## License
   
  ${ answers.license}

## Table of Contents

 - [Description](##Description)
 - [Installation](##Installation-Instructions)
 - [Usage Information](##Usage-Information)
 - [Contribution Guidelines](##Contribution-Guidelines)
 - [Test Instructions](##Test-Instructions)
 - [Questions](##Questions)

## Description

 ${ answers.description }

## Installation-Instructions

 ${ answers.installationInstructions }

## Usage-Information

 ${ answers.usageInformation }

## Contribution-Guidelines

 ${ answers.contributionGuidelines }

## Test-Instructions

 ${ answers.testInstructions }

## Questions

 ${ answers.github }
 ${ answers.email }

 Contact me at my email or github profile above for any inquiries you may have.

        
`

promptUser()
    .then((answers) => writeFileAsync("./README.md", generateReadme(answers)))
    .then (() => console.log("Success!"))
    .catch((err) => console.log(err));