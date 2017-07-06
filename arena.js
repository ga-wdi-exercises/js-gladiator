
class Arena {
  constructor(name){
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator(gladiator) {
    this.gladiators.push(gladiator)
  }
  fight() {
    if (this.gladiators.length !== 2) {
      return 'Invalid Number of Gladiators'
    }
    var glad1 = this.gladiators[0]
    var glad2 = this.gladiators[1]

    if (glad1.weapon === 'Trident') {
        if (glad2.weapon === 'Spear') {
          this.gladiators.pop()
          console.log('Gladiator 1 wins.')
        } else if (glad2.weapon === 'Club') {
          this.gladiators.shift()
          console.log('Gladiator 2 wins')
        } else if (glad2.weapon === 'Spear') {
          this.gladiators = []
          console.log('Both lose.')
        }
    } else if (glad1.weapon === 'Spear') {
        if (glad2.weapon === 'Trident') {
          this.gladiators.shift()
          console.log('Gladiator 2 wins.')
        } else if (glad2.weapon === 'Club') {
          this.gladiators.pop()
          console.log('Gladiator 1 wins.')
        } else if (glad2.weapon === 'Spear') {
          this.gladiators = []
          console.log('Both lose.')
        }
    } else if (glad1.weapon === 'Club') {
        if (glad2.weapon === 'Spear') {
          this.gladiators.shift()
          console.log("Gladiator 2 wins.")
        } else if (glad2.weapon === 'Trident') {
          this.gladiators.pop()
          console.log("Gladiator 1 wins.")
        } else if (glad2.weapon === 'Club') {
          this.gladiators = []
          console.log('Both lose.')
        }
    }
  }
}

var thunderDome = new Arena("thunderdome")

thunderDome.addGladiator(marcus)
thunderDome.addGladiator(alexander)

thunderDome.fight()
