//Learning from Section-3 Chapter-11 (Importing NPM modules) 
    //To get start with a package it's always good to look into the docs section of that package to grab some knowledge about the package

    const validator = require('validator'); //importing the package same as node core modules as we did earlier
    const obj = require('./utils.js');
    console.log(validator.isEmail(obj.email1)); //true
    console.log(validator.isEmail(obj.email2)); //false
    console.log(validator.isURL(obj.url1)); //true
    console.log(validator.isURL(obj.url2)); //true
    console.log(validator.isURL(obj.url3)); //true
    console.log(validator.isURL(obj.url4)); //true
    console.log(validator.isURL(obj.url5)); //false