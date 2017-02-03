class Gladiator {
  constructor(name, weapon) {
    weapon = weapon.toLowerCase();
    let weapons = ['spear', 'club', 'trident'];
    if (weapons.indexOf(weapon) === -1) {
      throw `Sorry, we're all out of ${weapon}s. Please grab a spear, a club, or a trident.`
    }
    this.name = name;
    this.weapon = weapon;
  }
}
