class Arena {
  constructor(arenaName) {
    this.name = arenaName.charAt(0).toUpperCase() + arenaName.slice(1);
    this.gladiators = [];
  }
  addGladiator(name){
    if (this.gladiatos.length < 2){
      this.gladiators.push(name)
    } else {
      console.log("Arena is full");
    }

  }
}


colosseum.addGladiator(max)
var colosseum = new Arena("Colosseum")
var megapolis = new Arena("megapolis")
