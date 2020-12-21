var fs = require("fs");
let myReadableStr = fs.createReadStream('test.txt');
myReadableStr.on('data', function (chunk) {
  console.log(chunk)
}) 