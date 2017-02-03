class Arena{
  constructor(name){
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }
  addGladiator(gladiator){
    if (this.gladiators.length < 2){
      this.gladiators.push(gladiator)
    } else{
      console.log("you cannot add more gladiators.")
    }
  }
  fight(){
    if (this.gladiators.length === 2){
      console.log ("fight!")
      console.log(this.gladiators[0].weapon, this.gladiators[1].weapon)
      const gladiator1 = this.gladiators[0].weapon;
      const gladiator2 = this.gladiators[1].weapon;
      if(gladitor1 == "trident" && gladitor2 == "spear"){
        console.log(`${this.gladiators[0]} wins!`)
      } else if(gladitor1 == "spear" && gladitor2 == "club"){
        console.log(`${this.gladiators[0]} wins!`)
      } else if (gladitor1 == "club" && gladitor2 == "trident"){
        console.log(`${this.gladiators[0]} wins!`)
      } else if (gladitor1 == gladitor2 ){
        console.log("everybody dies!")
      } else{
        console.log(`${this.gladiators[1]} wins!`)
      }
    } else{
      console.log("you need two gladiators to fight")
    }
  }
}





var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators) // => [max]
