const http = require("http");
const fs = require("fs");
let myreadStream = fs.createReadStream('info.html','utf-8');
const server = http.createServer((req, res)=> {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  myreadStream.pipe(res);
});
server.listen(3000, ()=> {
  console.log('Server is running at port 3000');
});