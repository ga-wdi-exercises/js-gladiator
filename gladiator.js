class Gladiator {
  constructor (name, weapon) {
    this.name = name
    if (weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident') {
      this.weapon = weapon
    } else {
      throw 'This is not a valid weapon'
    }
  }

}

var max = new Gladiator('Maximus', 'Spear')
