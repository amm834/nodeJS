var fs = require("fs");

/* Write File
fs.writeFile('info.txt','Hello',(err)=>{
  if (err) {
    console.log(err)
  }else{
    console.log('Created Successfully!')
  }
})
*/
/* Read File
fs.readFile('info.tt','utf-8',(err,data)=>{
  if(err){
  console.log(err)
  }else{
  console.log(data)
  }
})
*/
// Append File
fs.appendFile('info.txt',' World!',(err)=>{
  if(err)
  console.log(err)
  else
  console.log('Appended!')
})