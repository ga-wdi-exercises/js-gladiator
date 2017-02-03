class Arena{
  constructor(arenaName){
    this.arenaName = arenaName.charAt(0).toUpperCase() + arenaName.slice(1);
    this.Gladiators = []
  }
  newGladiator(fighters){
    if( this.Gladiators.length <= 2){
    this.Gladiators.push(fighters);
  } else {
    return "No more fighers can be added."
  }
  }
  fight(){
    let 
  }

}


let colosseum = new Arena ("Colosseum");
// console.log(colosseum.arenaName);
// let titus = new Gladiator("Titus", "Spear");
