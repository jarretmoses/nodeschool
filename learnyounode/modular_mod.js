var fs = require('fs');
var path = require('path');
module.exports = function(dir,ext,callback){
  var ext = '.' + ext;
  fs.readdir(dir, function(err,list){
    if(err) return callback(err);

    var filtered = [];
    list.forEach(function(file){
      if(path.extname(file) === ext){ 
        filtered.push(file) 
      }
    });
    callback(null,filtered);
  });
};

