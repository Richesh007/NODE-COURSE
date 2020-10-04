//Learning from Section-4 chapter-15 (Getting Input from Users)
    
    //Like browsers have Window/Document object similarly Node has "Process" object So,
    // from this object  we will be using "process.argv" here to get input from user through command line

        // console.log(process.argv);


    // if we run this js file with an argument like "node app.js arg" then we'll get output as shown below

        // [
        // 'C:\\Program Files\\nodejs\\node.exe',
        // 'C:\\Users\\riche\\OneDrive\\Desktop\\Node Course\\NODE-COURSE\\Notes-App\\app.js',
        // 'arg'
        // ]
    
    //Now here we can see "process.aegv" is an array where first two indexes are same for all
    //  but the actual argument is the third index which we can use to do something meaningful 

        // console.log("\nHello "+process.argv[2]+"!"); //Run this file with a name as an argument.
    

    //Now our task is to perform data manipulation into notes.txt by getting command from the user
    //but before that we'll see a demo using console log
    
    const command = process.argv[2];

    if(command === 'add'){
        console.log('Adding to the note!!');
    }
    // node app.js add  
    // Adding to the note!!

    // Now if we want to make it more dynamic then we have to write parsing logic or we can use any npm package
    // So, We'll be using "yargs" package
    const yargs = require('yargs');
    console.log(process.argv);
        // [
        //     'C:\\Program Files\\nodejs\\node.exe',
        //     'C:\\Users\\riche\\OneDrive\\Desktop\\Node Course\\NODE-COURSE\\Notes-App\\app.js',
        //     'add'
        // ]
    console.log(yargs.argv);
        // { _: [ 'add' ], '$0': 'app.js' }
