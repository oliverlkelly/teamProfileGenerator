const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets engineer ID', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('gets github of engineer', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getGithub()).toEqual("oliverlkelly");
}); 

test('gets role of engineer', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com', 'oliverlkelly');

    expect(engineer.getRole()).toEqual("Engineer");
}); 