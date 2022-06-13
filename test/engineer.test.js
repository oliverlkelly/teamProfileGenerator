const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets engineer ID', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('gets role of engineer', () => {
    const engineer = new Engineer('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
}); 