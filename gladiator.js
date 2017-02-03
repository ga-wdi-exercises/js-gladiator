class Gladiator{
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
  isWeapon(weapon){
    switch(this.weapon){
      case 'Spear':
        return true;
      case 'Trident':
        return true;
      case 'Club':
        return true;
      default:
        break;
    }
  }
}

const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Club");
// console.log(russellCrowe.name);
// console.log(russellCrowe.weapon);
