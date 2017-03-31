class Gladiator {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
}



class Arena {
  constructor(arena) {
    this.arena = arena;
    this.gladiators = [];
  }
  addGladiator(gladiators) {
    if (this.gladiators.length < 2) {
      return this.gladiators.push(gladiators);
    } else alert(`There are two gladiators in the arena right now\nPlease wait`);
  }

  fight() {

  for (var i = 0, i <= this.gladiators.length; i++) {
    if (this.gladiators[i].weapon === "Trident") {
      var trident = this.gladiators[i];
    } if (this.gladiators[i].weapon === "Spear") {
      var spear = this.gladiators[i];
    } if (this.gladiators[i].weapon === "Sword") {
      var sword = this.gladiators[i];
    }
  }
  var trident = this.gladiators.weapon === "Trident";
  var spear = this.gladiators.weapon === "Spear";
  var sword = this.gladiators.weapon === "Sword";







}


var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Sword")
var colosseum = new Arena("colosseum");
colosseum.addGladiator(max)
colosseum.addGladiator(titus)

console.log(colosseum.gladiators)
console.log(colosseum.gladiators.length)
