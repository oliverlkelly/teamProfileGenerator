const Employee = require('../utils/employee');
class Intern extends Employee {
    constructor(name, employeeID, email, school){
        super(name, employeeID, email);
        this.school = school;
    }

    getJob(){
        return 'Intern';
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;