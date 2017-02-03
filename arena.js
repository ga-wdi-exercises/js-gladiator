class Arena{
  constructor(name) {
    this.name = this.upperCase(name);
    this.gladiators = [];
  }
  upperCase(splitter) {
    return this.name = splitter.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  addGladiator(str) {
    this.gladiators.push(str);
    while (this.gladiators.length > 2) {
      this.gladiators.pop();
    }
  }
  fight() {
    // couldn't figure out in time
  }
}

let trial = new Arena('megalopolis');
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators)
console.log(colosseum.gladiators[0].weapon == colosseum.gladiators[1].weapon);
