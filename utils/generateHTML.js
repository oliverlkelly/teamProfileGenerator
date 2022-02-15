import Employee from './utils/employee.js';
import Manager from './utils/manager.js';
import Engineer from './utils/engineer.js';
import Intern from './utils/intern.js';

function createEmployeeCard(staff){
    switch(staff.constructor.name){
        case 'Manager':
            
            break;
        case 'Engineer':
            break;
        case 'Intern':
            break;
    }
}

// function generatehtml(data){
//     return
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <header>
//     </header>
//     <main></main>
//     <footer></footer>
    
// </body>
// </html>`
//}