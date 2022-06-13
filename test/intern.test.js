const Employee = require('../utils/employee');
const Intern = require('../utils/intern');

test('creates an intern object', () => {
    const intern = new Intern('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'A School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.employeeID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'A School');

    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets intern ID', () => {
    const intern = new Intern('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'A School');

    expect(intern.getEmployeeID()).toEqual(expect.any(Number));
});

test('gets intern email', () => {
    const intern = new Intern('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'A School');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test('gets intern school', () => {
    const intern = new Intern('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'A School');

    expect(intern.getSchool()).toEqual('A School');
});

test('gets role of intern', () => {
    const intern = new Intern('Oliver Liam Kelly', 1, 'oliverliamkelly@gmail.com', 'A School');

    expect(intern.getJob()).toEqual("Intern");
}); 