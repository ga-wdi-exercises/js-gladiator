class Gladiator {
  constructor(name){
    this.name = name;
    this.weapon = '';
  }
  chooseWeapon(choice) {
    if (choice == 'Spear' || choice == 'Club' || choice == 'Trident') {
      this.weapon = choice
    } else {
      console.error("Please select a valid weapon");
    }
  }
}
