import Employee from './employee.js';
export default class Engineer extends Employee {
    constructor(name, employeeID, email, github){
        super(name, employeeID, email);
        this.github = `https://github.com/${github}`;
    }
}