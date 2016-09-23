class Gladiator {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
//  capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
}

class Arena {
  constructor(nameOfArena){
    this.gladiators=[]

    this.nameOfArena = nameOfArena.charAt(0).toUpperCase() + nameOfArena.slice(1);


  }
  addGladiator(name) {

    if (this.gladiators.length < 2){
    this.gladiators.push(name)
    }
    else {
      console.log("Arena is Full")
    }


  }
  fight(){
    var gladiator1= this.gladiators[0]
    var gladiator2= this.gladiators[1]
  if(gladiator1.weapon === "Club" && gladiator2.weapon === "Trident"){
    this.gladiators.splice(1, 1)
    console.log(gladiator1.name + "Wins")

    // this.gladiators.pop()
  }
  else if (gladiator2.weapon === "Club" && gladiator1.weapon === "Trident"){
    this.gladiators.splice(0, 1)
console.log(gladiator2.name + "Wins")
// this.gladiators.pop()}
}
else if (gladiator1.weapon === "Trident" && gladiator2.weapon === "Spear"){
  this.gladiators.splice(1,1)
  console.log(gladiator1.name + "Wins")}
else if (gladiator2.weapon === "Trident" && gladiator1.weapon === "Spear"){
  this.gladiators.splice(0,1)
  console.log(gladiator2.name + "Wins")
}
else if (gladiator1.weapon === "Spear" && gladiator2.weapon === "Club"){
  this.gladiators.splice(1, 1)
  console.log(gladiator1.name + "Wins")
}
else if (gladiator1.weapon === "Club" && gladiator2.weapon === "Spear"){
  this.gladiators.splice(0, 1)
  console.log(gladiator2.name + "Wins")
}
else if (gladiator1.weapon === gladiator2.weapon){
  this.gladiators.splice(0,1)
  this.gladiators.splice(0,1)
  console.log(gladiator1.name + " and " + gladiator2.name + " has died.")
}

      }
    }







const Trundle = new Gladiator("Trundle", "Club")
const Nami = new Gladiator("Nami", "Trident")
const Nidalee = new Gladiator("Nidalee", "Spear")
console.log(Trundle.name)
console.log(Trundle.weapon)
const Megalopolis = new Arena("Megalopolis")
console.log(Megalopolis.nameOfArena)
