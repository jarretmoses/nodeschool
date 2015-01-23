var nums = process.argv.splice(2);
var sum =  nums.reduce(function(prev, curr){ return (+prev) + (+curr)});
console.log(sum);