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
  addName (name){
      this.name.push(name);
      if (this.name.length > 2){
        this.name.pop();
  }
}
  fight() {
    if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
      this.gladiators.pop();
      this.gladiators.pop();
    } else if(this.gladiators[0].weapon > this.gladiators[1].weapon) {
      this.gladiators.pop();
    } else {
      this.gladiators.shift();
    }
}
fightByName () {
  if (this.name[0].weapon === this.name[1].weapon) {
    this.name.pop();
    this.name.pop();
  } else if(this.name[0].weapon > this.name[1].weapon) {
    this.name.pop();
  } else {
    this.name.shift();
  }
  if(this.name[0].weapon > this.name[1].weapon){
    prompt("Hurray!");
  } else {
    prompt("Boo!")
  }
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
