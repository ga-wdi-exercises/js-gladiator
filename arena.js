
class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator (gladiator) {
    this.gladiators.push(gladiator)
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator)
    } else {
      console.log('Too many gladiators')
    }
  }
  fight () {
    if (this.gladiators.length < 2) {
      return 'Not Enough Gladiators'
    }

    var glad1 = this.gladiators[0]
    var glad2 = this.gladiators[1]
    if (glad1.weapon === glad2.weapon) {
      this.gladiators = []
      return 'both gladiators lose game'
    }
    switch (glad1.weapon) {
      case 'spear': {
        if (glad2.weapon === 'club') {
          this.gladiators.pop()
        } else {
          this.gladiators.shift()
        }
        break
}
      case 'trident': {
        if (glad2.weapon === club) {
          this.gladiators.shift()
        }
        else{
          this.gladiator.pop()
        }
        break

  }
  case 'club': {
    if (glad2.weapon === Spear) {
      this.gladiators.shift()
    } else {
      this.gladiators.pop()
    }
    break
}
// var colosseum = new Arena('Colosseum')
// console.log(colosseum.name) // => Colosseum

// var colosseum = new Arena('megalopolis')
// console.log(colosseum.name) // => Megalopolis

// var colosseum = new Arena('Colosseum')
// console.log(colosseum.gladiators) // => []

/** var max = new Gladiator('Maximus', 'Trident')
var colosseum = new Arena('Colosseum')
colosseum.addGladiator(max)
console.log(colosseum.gladiators) // => [Gladiator] **/

/** var max = new Gladiator("Maximus","Trident")
 var titus = new Gladiator("Titus","Sword")
 var andronicus = new Gladiator("Andronicus","Sword")
 var colosseum = new Arena("Colosseum")
 colosseum.addGladiator(max)
 colosseum.addGladiator(titus)
 colosseum.addGladiator(andronicus)
 console.log(colosseum.gladiators.length) // => 2

/**  var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators) // => [max]
**/
