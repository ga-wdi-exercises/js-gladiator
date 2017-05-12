class Arena {
  constructor (name, gladiators) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    this.gladiators = []
  }
  addGladiator (gladiator){
    this.gladiators.push(gladiator);
    if (this.gladiators.length > 2){
      this.gladiators.pop();
      console.log(colosseum.gladiators);
    }
  }
  fight (this.gladiators.length = 2){
    this.gladiators.pop();
  }
}

var colosseum = new Arena("Colosseum")
console.log(colosseum.name)

var max = new Gladiator("Maximus","Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Sword")
var andronicus = new Gladiator("Andronicus","Sword")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators.length)
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators)
