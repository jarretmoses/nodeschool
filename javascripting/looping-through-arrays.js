var pets = ['cat', 'dog', 'rat'];

for(var i = 0; i < pets.length; i++){
  var pet = pets[i];
  pets[i] = pet + 's';
}

console.log(pets);