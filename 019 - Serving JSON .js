var http = require("http");
let server = http.createServer((req,res)=>{
 res.writeHead(200,{'Content-Type':'application/json'});
 let obj = {
  name:'Aung Myat Moe',
  age:17,
  family:{
   father:'U Mg Shwe',
   mother:'Daw Than Than Swe'
  }
 }
 res.end(JSON.stringify(obj));
});
server.listen(3000,()=>{
 console.log('Server started!')
})