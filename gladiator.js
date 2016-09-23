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
Max.isAWeapon ()

class Arena extends Gladiator {
  constructor(arenaName, name, weapon) {
  super (name, weapon);
  this.arenaName = arenaName;
}
}

const Julius = new Arena ("Julius", "Max", "Trident")
