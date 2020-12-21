// Function
function getInstructorName() {
  console.log('WaiferKolar');
}
getInstructorName();


function getName(printName) {
  printName();
}
// Function Expression
let setName = function(){
  console.log('Aung Myat Moe');
}
getName(setName);