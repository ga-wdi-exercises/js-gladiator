class Arena {
    constructor(arenaName){
      this.arenaName = arenaName.toUpperCase();
      this.gladiators = [];
    }
    addGladiator(fighter){
      this.gladiators.push(fighter);
      console.log(this.gladiators);
        if (this.gladiators.length > 2) {
          this.gladiators.pop();
          console.log('Too many gladiators')
          console.log(this.gladiators.length)
        }
    }
    startFight(){

    }
}

var colosseum = new Arena("Colosseum");
var myLivingRoom = new Arena("My Living Room");
