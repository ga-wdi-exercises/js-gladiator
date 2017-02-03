class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator(gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator)
    }
  }
  fight() {
    if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear') {
      this.gladiators = this.gladiators[0]
    } else if (this.gladiators[1].weapon === 'Trident' && this.gladiators[0].weapon === 'Spear') {
      this.gladiators = this.gladiators[1]
    } else if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club') {
      this.gladiators = this.gladiators[0]
    } else if (this.gladiators[1].weapon === 'Spear' && this.gladiators[0].weapon === 'Club') {
      this.gladiators = this.gladiators[1]
    } else if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident') {
      this.gladiators = this.gladiators[0]
    } else if (this.gladiators[1].weapon === 'Club' && this.gladiators[0].weapon === 'Trident') {
      this.gladiators = this.gladiators[1]
    } else if (this.gladiators[1].weapon === this.gladiators[0].weapon) {
      this.gladiators = []
    }
  }
}




var max = new Gladiator("Maximus","Club")
var titus = new Gladiator("Titus","Club")
var andronicus = new Gladiator("Andronicus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators.length)
