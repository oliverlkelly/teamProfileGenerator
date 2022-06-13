export default class Employee {
    constructor(name, employeeID, email){
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    getEmployeeID(){
        return this.employeeID;
    }
    getEmail(){
        return this.email;
    }
    getJob(){
        return 'Employee';
    }
}