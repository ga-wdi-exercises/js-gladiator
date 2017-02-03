class Arena {
  constructor(arenaName) {
    this.name = arenaName.charAt(0).toUpperCase() + arenaName.slice(1);
    this.gladiators = [];
  }
  addGladiator(name){
    this.gladiators.push(name)
  }
}


colosseum.addGladiator(max)
var colosseum = new Arena("Colosseum")
var megapolis = new Arena("megapolis")
