class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = this.weaponCheck(weapon);
  }
  weaponCheck(str) {
    var weapons = ['Spear', 'Trident', 'Club'];
    if (str == weapons[0]) {
      return str;
    }
    else if  (str == weapons[1]) {
      return str;
    }
    else if (str == weapons[2]) {
      return str;
    }
    else {
      return 'Ye heathen! Thou hath not selected an appropriate weapon!';
    }
  }
}

// let max = new Gladiator('Kevin','Spear');
// let max = new Gladiator('Kevin','Trident');
// let max = new Gladiator('Kevin','Club');
// let max = new Gladiator('Kevin','tomato');
// let max = new Gladiator('Kevin','Hammer');
