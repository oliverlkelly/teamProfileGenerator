const Employee = require('../utils/employee');
const Engineer = require('../utils/engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets engineer ID', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getEmployeeID()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('gets github of engineer', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getGithub()).toEqual("https://github.com/oliverlkelly");
}); 

test('gets role of engineer', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getJob()).toEqual("Engineer");
}); 