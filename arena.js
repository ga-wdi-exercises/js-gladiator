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
    let gladiatorOne = this.Gladiators[0].name
    let weaponOne = this.Gladiators[0].weapon
    let gladiatorTwo = this.Gladiators[1].name
    let weaponTwo = this.Gladiators[1].weapon
    switch(gladiatorOne === gladiatorTwo){
      case(weaponOne === "Trident" && weaponTwo == "Spear"):
      console.log(`${gladiatorOne} wins`)
      break;
      case(weaponOne == "Spear" && weaponTwo == "Club"):
      console.log(sdfasdf);
      break;
      case(weaponOne == "Club" && weaponTwo == "Trident"):
      console.log(something);
      case(weaponOne == weaponTwo && weaponTwo == weaponOne):
      console.log("Both are defeated");
      default:
      console.log(Gladiators);
    }
  }
}


let colosseum = new Arena ("Colosseum");
// console.log(colosseum.arenaName);
// let titus = new Gladiator("Titus", "Spear");
