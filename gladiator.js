const weaponOptions = ['Spear', 'Club', 'Trident'];

class Gladiator {
  constructor(name, weapon){
    this._name = name;
    if( weapon && weaponOptions.indexOf(weapon) !== - 1 ){
      this._weapon = weapon;
      console.log(`${this._name} is equipped with a ${this._weapon}`);
    } else {
      this._weapon = 'Rubber Chicken';
      console.log(`${this._name} didn't choose a valid weapon, so they get a rubber chicken.`);
    }
  }
}
