var http = require('http');
var urls = process.argv.slice(2);
var bl = require('bl');
var responses = [];
var count = 0;

function getUrl(index){
  http.get(urls[index],function(res){ 
    res.pipe(bl(function(err,data){
      responses[index] = data.toString();
      count++;
      if(count === urls.length) printResult();
    }));
  });
};

function printResult(){
  responses.forEach(function(data){
    console.log(data);
  });
}

for(var i = 0; i < urls.length; i++){
  getUrl(i);
}
