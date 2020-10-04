//Learning from Section-4 chapter-17 (Argument parsing with yargs: part-2)
    const chalk = require('chalk');
    const yargs = require('yargs');
    const getNotes = require('./notes.js')


    // Now to make these commands more useful and dynamic we'll use builder property as shown below for add command
    //this builder property will add some option which can be given with the command or can make it mandatory to run that particular command
    yargs.command({                                 
        command: 'add',                             
        describe: 'This will add a new note.',
        builder: {
            title: { // this is an option which can be given with add command like 'node app.js add --title="Note title"'
                describe: 'Note title',
                demandOption: true, //this is used to make this option mandatory by default it is false which means optional
                type: 'string' //this will define the type of option's value
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },      
        handler: function(argv /* here argv is command line arguments */){                        
            console.log(chalk.bold.blue('Title: ')+ argv.title);       
            console.log(chalk.bold.blue('body: ')+ argv.body);       
        }                                           
    })   

    // if we run this above add command without required options (i.e. title, body) it will throw below error
    /* 
        app.js add

        This will add a new note.

        Options:
        --help     Show help                                                 [boolean]
        --version  Show version number                                       [boolean]
        --title    Note title                                      [string] [required]
        --body     Note body                                       [string] [required]

        Missing required arguments: title, body
    */

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

    // args.argv; 
    // Instead of using the above commented code to parse all the yargs command we can use below function call.
    yargs.parse();