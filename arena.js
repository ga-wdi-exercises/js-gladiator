class Arena{
  constructor(arenaName) {
    this.arenaName = arenaName;
    this.gladiators = [];
  }
  addGladiator(name){
    //Cannot add more than 2 gladiators
    if (this.gladiators.length < 2){
      this.gladiators.push(name);
    } else {
      console.error("Halt, You cannot add more than 2 gladiators");
    }
  }
  fight(){
    let glad1weap = this.gladiators[0].weapon
    let glad2weap = this.gladiators[1].weapon
    if ((glad1weap === "Spear" && glad2weap === "Club") ||
       (glad1weap === "Trident" && glad2weap === "Spear") ||
       (glad1weap === "Club" && glad2weap === "Trident")){
      console.log(`${this.gladiators[0].name} Wins!`);
      this.gladiators.pop();
    } else if(glad1weap === glad2weap){
      console.log(`${this.gladiators[0].name} and ${this.gladiators[1].name} both lose!`)
      this.gladiators = [];
    } else{
      console.log(`${this.gladiators[1].name} Wins!`)
      this.gladiators.shift();
    }
  }
  }


//Arenas
const colosseum = new Arena("colosseum");

// Trident beats Spear
// Spear beats Club
// Club beats Trident
// If the two gladiators have the same weapon, they are
