const fs = require('fs');
const inquirer = require('inquirer');



inquirer.prompt ([
    
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
        type: "choice",
        message: "Choose a license for your project",
        name: "license",
    
    },
    {
        type: "input",
        message: "What are the guidelines for contributing to this project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHub",
    },  {
        type: "input",
        message: "Insert your email address so others can reach you.",
        name: "email",
    }


])

.then(data)
    const {
        title, 
        description,
        installation,
        usage,
        credits,
        license,
        contributing,
        gitHub,
        email
    } = data;
    const generateReadMe=`
    
    ${title}

    ## Description 

        ${description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contributing](#contributing)
    - [Questions](#questions)
    

    ##Installation

    ${installation}

    ## Usage
    ${usage}

    ## Credits

    ${credits}

    ## License

    ${license}

    ## Contributing

    ${contributing}

    ## Questions

    Additional questions or concerns? 

    GitHub: !(https://github.com/${gitHub})
    \nemail: ${email}

    `;

    fs.writeFile("README.md", generateReadMe, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
