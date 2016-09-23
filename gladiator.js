class Gladiator {
  constructor (name, weapon) {
  this.name = name;
  this.isAWeapon(weapon)

}
  isAWeapon (weapon) {
    if (weapon != 'Spear'|| weapon != 'Club' || weapon != 'Trident') {
      console.log("Not a weapon") }
      else {
        this.weapon = weapon;
      }
}
  }

const Max = new Gladiator ("Maximus", "Bologne")

class Arena {
  constructor(name)

}

Max.isAWeapon ()
