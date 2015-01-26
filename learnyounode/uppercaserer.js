var map  = require('through2-map');
var http = require('http');

var server = http.createServer(function(req, res){
  if(req.method === 'POST'){
    req.pipe(map(function(data){
        return data.toString().toUpperCase();
    })).pipe(res);
  } else {
    req.end('Not a POST request\n');
  }
}).listen(process.argv[2]);