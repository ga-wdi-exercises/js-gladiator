class Arena{
  constructor(name){
    this.name = name;
    this.gladiator= [];
  }

  addGladiator(x){
    if (this.gladiator.length < 2){
      this.gladiator.push(x);
      console.log("ok");
    }
  }

  fight(){
    if (this.gladiator.length < 2){
    console.log("weapon");
  }
}

} // closes Arena class

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Sword")
// var andronicus = new Gladiator("Andronicus","Sword")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
// colosseum.addGladiator(andronicus)
console.log(colosseum.gladiator.length) // => 2

// // if trident vs Spear
//     trident wins
// // if spear vs club
//   spear wins
//   if club vs trident
//   club wins
