// basicServer.js
var http = require('http');
var fs = require ('fs');
var app = http.createServer(function(req, res){
  var url = req.url;
  if(url == '/'){
    url = '/index.html';
  }

  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + url));
});
console.log("Server is running at localhost..\n");
app.listen(8008);
