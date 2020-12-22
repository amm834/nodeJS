var http = require("http");
var fs = require("fs");
let server = http.createServer((req, res)=> {
 let url = req.url;
 if (url === '/' || url === '/home' || url === '/index') {
  let readFile = fs.createReadStream('home.html');
  res.writeHead(200, {
   'Content-Type': 'text/html'
  });
  readFile.pipe(res);
 } else if (url === '/info') {
  let readFile = fs.createReadStream('info.html');
  res.writeHead(200, {
   'Content-Type': 'text/html'
  });
  readFile.pipe(res);
 }else if(url === '/api/users'){
  let users = {
   name:'amm',
   age:17
  };
  res.writeHead(200,{'Content-Type':'application/json'});
  res.end(JSON.stringify(users));
 }else{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('404 Not Found!');
 }
});
server.listen(3000, ()=> {
 console.log('Server stated!');
});