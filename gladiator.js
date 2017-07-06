class Gladiator {
  constructor (name, weapon) {
    this.name = name
    if (weapon === 'Trident' || weapon === 'Spear' || weapon === 'Club') {
      this.weapon = weapon
    } else {
      throw 'invalid weapon!!'
    }
  }
}
