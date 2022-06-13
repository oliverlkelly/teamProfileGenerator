const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets intern ID', () => {
    const intern = new Intern('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets intern email', () => {
    const intern = new Intern('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test('gets role of intern', () => {
    const intern = new Intern('Oliver Liam Kelly', 001, 'oliverliamkelly@gmail.com');

    expect(intern.getRole()).toEqual("Intern");
}); 