// TODO: Include packages needed for this application
const inquirer          = require("inquirer");
const fs                = require("fs");
const generateMarkdown  = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title."
    },
    {
        type: "input",
        name: "description",
        message:  "Enter your project description."
    },
    {
        type: "input",
        name: "dependencies",
        message:  "Enter the dependencies your project requires."
    },
    {
        type: "input",
        name: "instructions",
        message:  "How do you use your project?"
    },
    {
        type: "list",
        name: "contributors",
        message: "Do you welcome contributors to your project?",
        choices: [
            "Yes",
            "No"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(resp) {
    fs.writeFile("README.md", generateMarkdown(resp), function(err) {
        if (err) {
          throw err;
        }
    }
)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(resp => {
        writeToFile(resp);
    });
}

// Function call to initialize app
init();