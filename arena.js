class Arena {
  constructor(name){
    this.name =
    this.gladiators = []
  }
addGladiators (name){
   if (colosseum.gladiators.length < 2) {
   this.gladiators.push(name)
 } else {
   return "error too many fighters"
 }

 }
fight () {
  let gladiator1 = this.gladiators[0].weapon
  let gladiator2 = this.gladiators[1].weapon
if (gladiator1 === "Trident"){
  switch(gladiator2){
    case "Trident":
        this.gladiators= [] //both die crowd applaues
        break
    case "Spear":
        this.gladiators.pop() // remove gladiator2
        break
    case "Sword":
        this.gladiators.pop() // remove gladiator2
        break
    case "Club":
        this.gladiators.shift() // remove gladiator1
        break
  }
} else if (gladiator1 === "Spear"){
  switch(gladiator2){
    case "Spear":
        this.gladiators= [] //both die crowd applaues
        break
    case "Club":
        this.gladiators.pop() // remove gladiator2
        break
    case "Sword":
        this.gladiators.pop() // remove gladiator2
        break
    case "Trident":
        this.gladiators.shift() // remove gladiator1
        break
  }
} else if (gladiator1 === "Club"){
  switch(gladiator2){
    case "Club":
        this.gladiators= [] //both die crowd applaues
        break
    case "Sword":
        this.gladiators.pop() // remove gladiator2
        break
    case "Trident":
        this.gladiators.pop() // remove gladiator2
        break
    case "Spear":
        this.gladiators.shift() // remove gladiator1
        break
  }
} else if (gladiator1 === "Sword"){
  switch(gladiator2){
    case "Sword":
        this.gladiators= [] //both die crowd applaues
        break
    case "Spear":
        this.gladiators.pop() // remove gladiator2
        break
    case "Trident":
        this.gladiators.pop() // remove gladiator2
        break
    case "Club":
        this.gladiators.shift() // remove gladiator1
        break
  }
}
}
}

var max = new Gladiator("Maximus", "Trident")
var titus = new Gladiator("Titus","Sword")
var andro = new Gladiator("Andronicus","Sword")
var sparta = new Gladiator ("Spartacus","Club")
var colosseum = new Arena("Colosseum")
console.log(colosseum.gladiators)
