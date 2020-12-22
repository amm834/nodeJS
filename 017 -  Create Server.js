var http = require("http");
let port = 3000;
let server = http.createServer((req, res)=> {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('Hello World!');
});
server.listen(port, ()=> {
  console.log('Server is running at ' + port);
});