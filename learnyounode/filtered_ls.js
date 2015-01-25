var fs = require('fs');
var path = require('path');
var extention = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err,files){
  files.forEach(function(file){
      if(path.extname(file) === extention) console.log(file);
  });
});