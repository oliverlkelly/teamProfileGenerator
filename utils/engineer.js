const Employee = require('../utils/employee');
class Engineer extends Employee {
    constructor(name, employeeID, email, github){
        super(name, employeeID, email);
        this.github = `https://github.com/${github}`;
    }

    getJob(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;