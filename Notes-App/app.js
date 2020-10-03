//Learning from Section-3 Chapter-10 (Importing your own files) 
    //Challenge
    
    const fs = require('fs');
    fs.writeFileSync('notes.js', 'const getNotes = function() {return \'Your notes...\';} \n module.exports = getNotes');
    const getNotes = require('./notes.js');
    console.log(getNotes());
