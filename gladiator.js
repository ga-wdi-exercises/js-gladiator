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

    this.nameOfArena = nameOfArena;
    // capitalizeFirstLetter(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }

  }
  addGladiator(name) {

    if (this.gladiators.length < 2){
    this.gladiators.push(name)
    }
    else {
      console.log("Arena is Full")
    }


  }
  fight(gladiator1, gladiator2){
  if(gladiator1.weapon === "Club" && gladiator2.weapon === "Trident"){
    console.log(gladiator1.name + "Wins")
  }
  else if (gladiator2.weapon === "Club" && gladiator1.weapon === "Trident"){
console.log(gladiator2.name + "Wins")}
else if (gladiator1.weapon === "Trident" && gladiator2.weapon === "Spear"){
  console.log(gladiator1.name + "Wins")}
else if (gladiator2.weapon === "Trident" && gladiator1.weapon === "Spear"){
  console.log(gladiator2.name + "Wins")
}
else if (gladiator1.weapon === "Spear" && gladiator2.weapon === "Club"){
  console.log(gladiator1.name + "Wins")
}
else if (gladiator1.weapon === "Club" && gladiator2.weapon === "Spear"){
  console.log(gladiator2.name + "Wins")
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
