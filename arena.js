class Arena {
  constructor(name){
    this.name=name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators=[];
    console.log(" Welcome to "+name+"!!!")
  }
  addGladiator(name){
      this.gladiators.push(name);
      console.log(this.gladiators+" added!!!")
      console.log(this.gladiators.length);

    if (this.gladiators.length==2){
      return "You already have two players";
    }
  }

fight(){
  if (this.gladiators.length===2){
    if (this.gladiators[0]==this.gladiators[1]){
       delete this.gladiators[0];
       delete this.gladiators[1];
      }
    else{
      // Trident beats Spear
      // Spear beats Club
      // Club beats Trident
    }
  }
  else{
console.log("You have no enough players to start the game");
  }
}


}
