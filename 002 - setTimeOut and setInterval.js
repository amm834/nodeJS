setTimeout(function() {
  //console.log('I have been waited!')
}, 3000);

let i = 0;
let myInterval = setInterval(function () {
  i++;
  if(i === 5)
  clearInterval(myInterval)
  else
  console.log(`I am ${i}.`)
}, 1000)