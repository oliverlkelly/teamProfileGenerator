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

// get manager data function
async function managerData() {
    const managerInput = await inquirer.prompt(managerQuestions);
    console.log(managerInput);
}
//get engineer data function
async function engineerData() {
    const engineerInput = await inquirer.prompt(engineerQuestions);
    console.log(engineerInput);
}
//get intern data function
async function internData() {
    const internInput = await inquirer.prompt(internQuestions);
    console.log(internInput);
}

async function init() {
    await managerData();
    await engineerData();
    await internData();
}

init();