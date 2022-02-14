//Package inclusions
const inquirer = require('inquirer');


// Question Arrays
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'employeeID',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNum',
    }
];
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'employeeID',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their GitHub username?',
        name: 'gitName',
    }
];
const internQuestions = [
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'employeeID',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school are they from?',
        name: 'school',
    }
];