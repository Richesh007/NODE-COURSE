const fs = require('fs');

const getNotes = function() {return 'Your notes...';} 

const addNote = function(title, body) {
    const notes = loadNotes();

    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        console.log(error); //this will get executed for the first time as we haven't created notes.json file which we are trying to read
        return [];
    }
}

const saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = {
    getNotes,
    addNote
}