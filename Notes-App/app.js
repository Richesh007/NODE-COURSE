//Learning from Section-3 Chapter-11 (Importing NPM modules) 
    //To start with NPM modules we need to use NPM commands (NPM stands for Node Package Manager). NPM comes as a core module with Node.js as console.
    // The very first command is "npm init" which should be ran into root directory of your project. 
    // It will create a package.json file which is nothing but config file of the project as a default custom Package of the project
    // It will also contain other NPM package info which is installed using "npm install <package name>" for this project

    //Now I'm gonaa start with actual NPM package from "www.npmjs.com" e.g. "validator"
    //TO use this package in my project I have to use "npm i validator" where i is short for install
    //this command is common to all the npm packages except for the name of the 
    //package which we can get from the site "https://www.npmjs.com/package/<packagename> e.g. https://www.npmjs.com/package/validator"

    //"npm i validator" this command will create a file (package-lock.json which is again a config which contains a bit extra info making npm a bit faster
    // and a bit secure by keeping exact version and the path of the package and SHA code for that package) and a directory (node_modules) which will contain required files/folders of the package installed
    // we should not modify any of these files/folders as it will be handled by npm

    //And it's not mandatory but always we can specify the version of the package to be installed like "npm i validator@10.8.0" to install specific version