import Employee from './employee';
class Intern extends Employee {
    constructor(name, employeeID, email, school){
        super(name, employeeID, email);
        this.school = school;
    }
}