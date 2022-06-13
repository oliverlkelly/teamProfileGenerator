const Employee = require('../utils/employee');
class Manager extends Employee {
    constructor(name, employeeID, email, officeNum){
        super(name, employeeID, email);
        this.officeNum = officeNum;
    }

    getJob(){
        return 'Manager';
    }
    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager;