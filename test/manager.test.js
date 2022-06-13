const Employee = require('../utils/employee');
const Manager = require('../utils/manager');

test('creates an manager object', () => {
    const manager = new Manager('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', '0426989455');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test('gets manager name', () => {
    const manager = new Manager('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', '0426989455');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets manager ID', () => {
    const manager = new Manager('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', '0426989455');

    expect(manager.getEmployeeID()).toEqual(expect.any(Number));
});

test('gets manager email', () => {
    const manager = new Manager('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', '0426989455');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test('gets office number of manager', () => {
    const manager = new Manager('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', '0426989455');

    expect(manager.getOfficeNum()).toEqual('0426989455');
}); 

test('gets role of manager', () => {
    const manager = new Manager('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', '0426989455');

    expect(manager.getJob()).toEqual("Manager");
}); 