import Employee from './employee';
export default class Manager extends Employee {
    constructor(name, employeeID, email, officeNum){
        super(name, employeeID, email);
        this.officeNum = officeNum;
    }
}