//Learning from Section-4 chapter-16 (Argument parsing with yargs: part-1)
    const chalk = require('chalk');
    const yargs = require('yargs');
    const getNotes = require('./notes.js')

    //The below console log will print 1.0.0 with the command "node app.js --version"
    //and it will print below 3 lines with command "node app.js -help"
        //     Options:
        // --help     Show help                                                 [boolean]
        // --version  Show version number                                       [boolean]
    // console.log(yargs.argv) 

    // Customizing yargs version
    yargs.version('1.1.0') //Now we will get 1.1.0 with the command "node app.js --version"

    // Creating add command
    yargs.command({                                 
        command: 'add',                             
        describe: 'This will add a new note.',      
        handler: function(){                        
            console.log('Adding a new note.')       
        }                                           
    })      
    
    //Now after creating the above command we will get below output by running the command "node app.js -help"

        // Commands:
        // app.js add  This will add a new note.

        // Options:
        // --help     Show help                                                 [boolean]
        // --version  Show version number                                       [boolean]

    // So, Basically it will show the script name, command and discription of the command under the command list.
    // Now if we give add command in command line it will print "Adding a new note."

    // console.log(yargs.argv);

    yargs.command({                                 
        command: 'remove',                             
        describe: 'This will remove a note.',      
        handler: function(){                        
            console.log('removing a note.')       
        }                                           
    })   
    yargs.command({                                 
        command: 'list',                             
        describe: 'This will list out all notes.',      
        handler: function(){                        
            console.log('Printing')       
        }                                           
    })   
    yargs.command({                                 
        command: 'read',                             
        describe: 'This will read a note.',      
        handler: function(){                        
            console.log('reading a note.')       
        }                                           
    })   

    yargs.argv; //this should be present at the end of all yargs related task. this could be inside console log also