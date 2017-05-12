class Gladiator {
  constructor (name, weapon) {
  this.name = name;
  this.weapon = weapon
  this.isAWeapon(weapon)
}
  isAWeapon (weapon) {
    if (weapon !== 'Spear'|| weapon !== 'Club' || weapon !== 'Trident') {
      return ("Not a weapon"); }
      else {
        return ("You can enter");
        this.weapon = weapon;
      }
}
  }

const Max = new Gladiator ('Maximus','Spear')
Max.isAWeapon ()

class Arena extends Gladiator {
  constructor(arenaName, name, weapon) {
  super (name, weapon);
  this.arenaName = arenaName;
}
addGladiator(name, weapon) {
  this.name = name;
  this.isAWeapon(weapon);
    }
  }
const Julius = new Arena ('Julius')
const Octavius = new Gladiator ('Octavius', 'Club')
  Julius.addGladiator(Octavius)
  Julius.addGladiator(Max)
console.log(Julius.gladiators)
