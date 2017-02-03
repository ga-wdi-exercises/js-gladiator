class Arena{
  constructor(arenaName){
    this.arenaName = arenaName.charAt(0).toUpperCase() + arenaName.slice(1);
  }
}


let colosseum = new Arena ("Colosseum");
console.log(colosseum.arenaName);
