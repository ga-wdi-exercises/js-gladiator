class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
 }
}
/* var max = new Gladiator("Maximus","Trident")
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident" */
class Arena {
  constructor(name) {
    this.name = name.toUpperCase();
    this.gladiators = []; // adds a gladiator
  }
  addGladiator(){
    this.gladiators.push()
    console.log(colosseum.gladiators)
  }

}


var max = new Gladiator("Maximus","Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
console.log(colosseum.gladiators) // => [Gladiator]


/* var colosseum = new Arena("megalopolis")
console.log(colosseum.name) // => Megalopolis
var colosseum = new Arena("Colosseum")
console.log(colosseum.gladiators) // => Colosseum */
