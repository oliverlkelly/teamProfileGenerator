import Employee from './employee.js';
export default class Manager extends Employee {
    constructor(name, employeeID, email, officeNum){
        super(name, employeeID, email);
        this.officeNum = officeNum;
    }
}