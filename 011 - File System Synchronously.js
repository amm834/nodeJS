var fs = require("fs");
// File Write Sync

fs.writeFileSync("info.txt", "Hello World!")
// Read File Sync
let readData = fs.readFileSync("info.txt", 'utf-8');
console.log(readData);

// Append Data
let appendData = fs.readFileSync('009 - For In and Of Loop.js');
fs.appendFileSync('info.txt', appendData)