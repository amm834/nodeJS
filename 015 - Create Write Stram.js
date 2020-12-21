var fs = require("fs");
let readableStr = fs.createReadStream('test.txt','utf-8');
let writeableStr = fs.createWriteStream('new');
readableStr.on('data',(chuck)=>{
  writeableStr.write(chuck);
})