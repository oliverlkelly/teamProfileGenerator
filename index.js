//Package inclusions
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

//classes
class Employee {
    constructor(name, employeeID, email){
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
}
class Manager extends Employee {
    constructor(name, employeeID, email, officeNum){
        super(name, employeeID, email);
        this.officeNum = officeNum;
    }
}
class Engineer extends Employee {
    constructor(name, employeeID, email, github){
        super(name, employeeID, email);
        this.github = github;
    }
}
class Intern extends Employee {
    constructor(name, employeeID, email, school){
        super(name, employeeID, email);
        this.school = school;
    }
}

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
    //console.log(engineerInput);
    return engineerInput;
}
//get intern data function
async function internData() {
    const internInput = await inquirer.prompt(internQuestions);
    //console.log(internInput);
    return internInput;
}
async function menuData() {
    const menuSelect = await inquirer.prompt(menu);
    return menuSelect.choice;
}

async function init() {
    var manager = await managerData();
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
    // console.log(engineers);
    // console.log(interns);
    console.log(manager);
}

init();