var http = require('http');
var fs   = require('fs');
var fileStream = fs.createReadStream(process.argv[3]);

http.createServer(function(req,res){
  res.writeHead(200, {'content-type': 'text/plain'})
  fileStream.pipe(res);
}).listen(process.argv[2]);