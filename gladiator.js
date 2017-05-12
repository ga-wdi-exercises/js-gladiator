class Gladiator {
  constructor(name) {
    this.name = name,
    this.weapon = '';
  }
  chooseWeapon(choice) {
    if(choice =='Spear' || choice == 'Club' || choice == 'Trident') {
      this.weapon = choice;
    }
    else {
      console.error(`${choice} is not allowed in the arena`);
    }
  }
}
const warrior = new Gladiator("Mariana", "Spear");
console.log(warrior.name);
console.log(warrior.weapon);
