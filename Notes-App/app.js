//Learning till section-3 Chapter-9 (First Node.js Script, Intro to Node.js module system, Importing Node.js core modules (Ref: https://nodejs.org/dist/latest-v12.x/docs/api/))

    // console.log('Console is not a part of javascript. It\'s a core module of NODE which runs on V8 engine and same goes for chrome as well. Console can be used without requiring it but other core modules like fs needs to be required first as shown below otherwise it will throw error.');

    // // fs.writeFileSync('Notes.txt', 'this statement will throw error as fs is not defined yet.');

    // const fs = require('fs');
    // fs.writeFileSync('Notes.txt', 'This statement will create a file Notes.txt if it\'s not already present in the given path (i.e. first argumennt) or if it\'s present then it will override with the text in it as the second argument.');

    // fs.appendFileSync('Notes.txt', '\n This statement will append the text given as second argument in Notes.txt file (i.e. first argument).')

//Learning from Section-3 Chapter-10 (Importing your own files)
    
    const firstName = require('./utils.js'); //To import custom files it needs relative path unlike core modules or modules

    console.log(firstName)


