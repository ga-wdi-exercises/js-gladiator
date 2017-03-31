class Gladiator {
  constructor(gladiatorName, weapon){
    this.gladiatorName = gladiatorName;
    this.weapon = weapon;
  }
}

class Arena{
  constructor (arenaName){
    this.arenaName = arenaName;
    this.gladiators = [];
  }
  addGladiator(gladiator){
    this.gladiators.push(gladiator);
  }

}

var max = new Gladiator("Maximus","Trident");
var titus = new Gladiator("Titus","Sword");
var andronicus = new Gladiator("Andronicus","Sword");
var colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length);
console.log(max.gladiatorName);
console.log(max.weapon);
console.log(colosseum.arenaName);
console.log(colosseum.arenaName.toUpperCase());
