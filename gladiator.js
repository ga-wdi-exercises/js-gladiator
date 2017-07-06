console.log('gladiator linked')
class Gladiator {
  constructor (name, weapon) {
  this.name = name
  if (weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident') {
    this.weapon = weapon
    } else {
      throw(new Error('invalid weapon'))
    }
  }
}
