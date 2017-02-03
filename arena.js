class Arena {
  constructor(name, gladiators) {
    this.name = name.charAt(0).toUpperCase()+name.substr(1).toLowerCase()
    this.gladiators = []
  }
  addGladiator(gladiators) {
    if (this.gladiators.length <= 1) {
    this.gladiators.push(gladiators)
    }
  }
  fight() {
    var gladiator1 = this.gladiators[0].weapon
    var gladiator2 = this.gladiators[1].weapon
      if (gladiator1 === "Trident" && gladiator2 === "Spear") {
        this.gladiators.splice(1)
        console.log("Trident wins!")
      } else if (gladiator1 === "Spear" && gladiator2 === "Club") {
        this.gladiators.splice(1)
        console.log("Spear wins!")
      } else if (gladiator1 === "Club" && gladiator2 === "Trident") {
        this.gladiators.splice(1)
        console.log("Club wins!")
      } else {
        console.log("Gladiators killed each other!")
      }
    }
}
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators)
