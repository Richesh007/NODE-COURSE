//Learning from Section-4 chapter-19 (Adding a Note)
    // In this chapter finally we are gonna actually adding a note into a json file 
    const chalk = require('chalk');
    const yargs = require('yargs');
    const notes = require('./notes.js')


    yargs.command({                                 
        command: 'add',                             
        describe: 'This will add a new note.',
        builder: {
            title: { 
                describe: 'Note title',
                demandOption: true, 
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },      
        handler: function(argv){                        
            console.log(chalk.bold.green('Adding a note...'));       
            notes.addNote(argv.title, argv.body);   
        }                                           
    }) 

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

    yargs.parse();