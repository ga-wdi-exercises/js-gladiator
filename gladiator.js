
// ### Bonus
//
// Make it so that you cannot assign a Gladiator an invalid weapon (i.e., anything
//   aside from Spear, Club or Trident. That means running code like
//   `new Gladiator("Jesse", "Taco")` would throw an error

class Gladiator {
  constructor (name, weapon) {
    this.name = name
    if (weapon === 'Spear' || weapon === 'Trident' || weapon === 'Club') {
      this.weapon = weapon
    } else {
      throw 'THis is not a valid weapon!'
    }
  }
}
