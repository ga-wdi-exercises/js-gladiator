class Gladiator {
  constructor (name, weapon) {
    this.name = name

    if (weapon === 'spear' || weapon === 'club' || weapon === 'Trident') {
      this.weapon = weapon
    } else {
      throw (new Error('involid weapon'))
    }
  }
}

var max = new Gladiator('Maximus', 'Trident')
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident"
