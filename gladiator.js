class Gladiator {
  constructor(inputName, inputWeapon) {
    this.name = inputName;
    this.weapon = this.validateWeapon(inputWeapon);
    this.classType = 'Gladiator'
  }
  validateWeapon(inputWeapon) {
    let weaponList = ['trident','spear','club']
    if(weaponList.indexOf(inputWeapon) == -1) {
      console.log(`Your master's gross incompetence in choosing an appropriate weapon has left you defenseless and without a means to fight.  Welcome to the slaughter, and may the Gods have mercy on your soul`)
      return '';
    } else {
      return inputWeapon;
    }
  }
  newWeapon(inputWeapon) {
    this.weapon = validateWeapon(inputWeapon);
  }
}

const apple = new Gladiator('max','trident');
const banana = new Gladiator('imous','spear');
const grape = new Gladiator('decimus','club')
