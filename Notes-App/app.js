//Learning from Section-3 Chapter-11 (Importing NPM modules) 
    //Challenge Use "chalk" npm package of version 2.4.1

    const chalk = require('chalk');
    const util = require('./utils.js');

    console.log(util.validator.isNumeric(util.add(3,2).toString()) ? chalk.green('Summation successful 3 + 2 = '+util.add(3,2)) : chalk.red(util.add(3,2)));
    console.log(util.validator.isNumeric(util.add(3,'b').toString()) ? chalk.green('Summation successful 3 + b = '+util.add(3,'b')) : chalk.red(util.add(3,'b')));

    //Below are some examples given in the docs of this chalk package
        console.log(chalk.blue.bgRed.bold('Hello world!'));
        console.log(chalk.green(
            'I am a green line ' +
            chalk.blue.underline.bold('with a blue substring') +
            ' that becomes green again!'
        ));

        console.log(`
            CPU: ${chalk.red('90%')}
            RAM: ${chalk.green('40%')}
            DISK: ${chalk.yellow('70%')}
        `);