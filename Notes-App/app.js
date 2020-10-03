//Learning from Section-3 Chapter-13 (Global npm modules and nodemon) 
   //There are some modules in npm repo which is designed to be used globally
   //Like "nodemon" it's a package which is used to rerun the js file (in my case it's app.js)
   // if there is any change.

   // To install this package globally we have to use the command "npm install nodemon -g"

   //To use this package we just need to give command "nodemon app.js" instead of "node app.js" so it will run a process 
   //which will continously monitor app.js file for any change and will restart if any change found

   //this package will add not any extra line in the js file instead it will allow you to run some extra commands in terminal like node/npm commands

   //It is observed that in windows OS we get error as shown below while executing nodemon commands in powershell but in CMD it works fine without any policy change

        //    nodemon : File C:\Users\riche\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on
        //     this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
        //     At line:1 char:1
        //     + nodemon -v
        //     + ~~~~~~~
        //     + CategoryInfo          : SecurityError: (:) [], PSSecurityException
        //     + FullyQualifiedErrorId : UnauthorizedAccess
    
    // To resolve the above mentioned issue we can execute the command "Set-ExecutionPolicy Unrestricted" in PowerShell as Administrator
    console.log("nodemon started watching..!!")