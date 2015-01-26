var http = require('http');
var url  = require('url');

http.createServer(function(req,res){
  if(!req.method === 'GET')
    res.end('Not a GET request\d');

  var parsedURL = req.url
  var query = url.parse(parsedURL,true).query.iso;
  var date = new Date(query);

  res.writeHead(200, {'content-type': 'application/json'});

  var jsonResponse = /unixtime/.test(parsedURL) ? unixtime : timeParse(date) 

  if(jsonResponse){
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.writeHead(400);
    res.end();
  }

  res.end(JSON.stringify(jsonResponse));
}).listen(process.argv[2]); 


function timeParse(time){
   return {
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
   }
}

function unix(time){
  return { "unixtime": time.getTime() }
}