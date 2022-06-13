//Package inclusions
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
const Employee = require('../utils/employee.js');
const Manager = require('../utils/manager.js');
const Engineer = require('../utils/engineer.js');
const Intern = require('../utils/intern.js');

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
const menu = {
    type: 'list',
    message: 'Would you like to add members to your team?',
    choices: [
        'Add an Engineer',
        'Add an Intern',
        'No, finish building my team'
    ],
    name: 'choice',
};


// get manager data function
async function managerData() {
    const managerInput = await inquirer.prompt(managerQuestions);
    let managerOutput = new Manager(managerInput.name, managerInput.employeeID, managerInput.email, managerInput.officeNum);
    return managerOutput;
}
//get engineer data function
async function engineerData() {
    const engineerInput = await inquirer.prompt(engineerQuestions);
    let engineerOutput = new Engineer(engineerInput.name, engineerInput.employeeID, engineerInput.email, engineerInput.gitName);
    return engineerOutput;
}
//get intern data function
async function internData() {
    const internInput = await inquirer.prompt(internQuestions);
    let internOutput = new Intern(internInput.name, internInput.employeeID, internInput.email, internInput.school);
    return internOutput;
}
async function menuData() {
    const menuSelect = await inquirer.prompt(menu);
    return menuSelect.choice;
}

async function init() {
    var employees = [await managerData()];
    var engineers = [];
    var interns = [];
    let done = false;
    do{
        switch(await menuData()){
            case 'Add an Engineer':
                engineers.push(await engineerData());
                //console.log(engineers);
                break;
            case 'Add an Intern':
                interns.push(await internData());
                //console.log(interns);
                break;
            case 'No, finish building my team':
                done = true;
                break;
        }
    }while(done !== true);
    engineers.forEach(element => {
        employees.push(element);        
    });
    interns.forEach(element => {
        employees.push(element);
    });

    const html = generateHTML(employees);
    fs.writeFile('./index.html', html, err =>{
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Profile Generated!")
        }
    })
}

init();