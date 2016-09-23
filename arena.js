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
  fight() {
    var gladiator1 = this.gladiators[0].weapon;
    var gladiator2 = this.gladiators[1].weapon;
    if (gladiator1 === "trident" && gladiator2 === "spear"){
      console.log("Gladiator 1 wins!");
    }
    else if (gladiator1 === "spear" && gladiator2 === "club"){
      console.log("Gladatior 1 wins!")
    }
    else if (gladiator1 === "club" && gladiator2 === "trident" ) {
      console.log("Gladiator 1 wins!")
    }
    else if (gladiator1 = gladiator2) {
      console.log("Get outta here!!!")
    }
    else {
      console.log("Gladiator 2 wins!")
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
