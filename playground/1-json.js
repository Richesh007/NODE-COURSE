//Learning from Section-4 chapter-18 (Storing data with JSON)

const fs = require('fs')
// const book = {
//     title: 'Ego is enemy',
//     author: 'Mahesh Babu'
// }

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson);

//Note: till now we have created a file 1-json.json having book object data with the above written code

//Challenge: 
//1. read the file 1-json.json
//2. change author name
//3. overwrite the file data

const dataBuffer = fs.readFileSync('1-json.json');
let dataString = dataBuffer.toString();
const dataJson = JSON.parse(dataString);
dataJson.author = "Richesh Gaurav";
dataString = JSON.stringify(dataJson);
fs.writeFileSync('1-json.json', dataString);