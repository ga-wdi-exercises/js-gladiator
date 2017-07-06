class Gladiator {
  constructor (name, weapon) {
    this.name = name

    if (['Trident', 'Spear', 'Club'].indexOf(weapon) < 0) {
      throw (new Error('Invalid Weapon'))
    } else {
      this.weapon = weapon
    }
  }
}

var max = new Gladiator('Maximus', 'Trident')
var titus = new Gladiator('Titus', 'Spear')
var andronicus = new Gladiator('Andronicus', 'Spear')
