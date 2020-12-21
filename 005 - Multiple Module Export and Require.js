let trainerName = ()=>{
  console.log('WaiferKolar');
}
let studentName = ()=>{
  console.log('Aung Myat Moe');
}
// module.exports.trainerName = trainerName;
// module.exports.studentName = studentName;

module.exports = {
  trainerName,
  studentName
}


/** helper.
 var  names = require("./005 - Multiple Module Export and Require");
names.trainerName();
names.studentName();
*/