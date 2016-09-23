class Arena{
  constructor(name){
    this.gladiators = [];
    this.name = capitalizeFirstLetter(name);
  }
  addGladiator (name) {
    if (this.gladiators.length < 2) {
    this.gladiators.push(name);
    }
    else {
    document.write("The arena has reached it's maximum capacity for Gladiators!");
    }
  }
}

function capitalizeFirstLetter(inStr) {
  return inStr.replace(/\w\S*/g, function(name2)
  { return name2.charAt(0).toUpperCase() + name2.substr(1).toLowerCase();
  });
}

//let ga = new Arena("GA")
//ga.name // "GA"
//ga.gladiators // []
