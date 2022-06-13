const Employee = require('../utils/employee');

test('creates an employee object', () => {
    const employee = new Employee('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com');

    expect(employee.getEmployeeID()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com');

    expect(employee.getJob()).toEqual("Employee");
}); 