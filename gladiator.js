class Gladiator {
  constructor(name, weapon) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.weapon = weapon.charAt(0).toUpperCase() + weapon.slice(1);;
  }
  // if (weapon !== "Spear" || weapon !== "Club" || weapon !== "Trident" ) {
  //   throw `Invalid weapon, must be a Spear, Club, or Trident`
  // }
}
