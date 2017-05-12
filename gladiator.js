class Gladiator {
  constructor(name) {
    this.name = name;
    this.weapon = null;
  }
  chooseWeapon(choice) {
    if (choice == 'club' || choice == 'spear' || choice == 'trident') {
      this.weapon = choice;
    } else {
      console.error(`${choice} is not an allowed weapon`);
    }
  }
}


const Maximus = new Gladiator('Maximus');
const Apollo = new Gladiator('Apollo');
Maximus.chooseWeapon('spear');
Apollo.chooseWeapon('trident');
