class Arena {
  constructor(name){
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }//end constructor

  addGladiator(gladiator){
    if(this.gladiators.length < 2){
      this.gladiators.push(gladiator);
    }
  }//end add gladiators
  // fight(this.gladiators[0]){
  //   if(this.gladiators[0].weapon.toUpperCase() == 'TRIDENT'){
  //     console.log("fight");
  //   }
  // }

}//end class Arena

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Club")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators);
console.log(colosseum.gladiators.length) // => 2
