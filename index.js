const fs = require('fs');
const inquirer = require('inquirer');



inquirer   
    .prompt ([
    
        {
            type: "input",
            message: "What is the title of your Project?",
            name: "title",
        },
    {
        type: "input",
        message: "Insert a brief description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required for installation?",
        name: "installation",
    
    },
    {
        type: "input",
        message: "What are the instruction for use? Include examples.",
        name: "usage",
    },
    {
        type: "input",
        message: "Does your project have collaborators? If yes, insert their names and links to their github profile.",
        name: "credits",
    },
    {
        typee: "choice",
        message: "Choose a license for your project",
        name: "license",
    },
    {
        typee: "input",
        message: "What are the guidelines for contributing to this project?",
        name: "contributing",
    },
    {
        typee: "input",
        message: "What is your GitHub username?",
        name: "gitHub",
    },  {
        typee: "input",
        message: "Insert your email address so others can reach you.",
        name: "email",
    }


])
