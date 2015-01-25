module.exports = function filterFiles(dir,ext,fileCheck{
  var list = fs.readdir(dir);
};

function fileCheck(err, list){
   list.forEach(function(file){
        path.extname(file) === ext;
   });
}