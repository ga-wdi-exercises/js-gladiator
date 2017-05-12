class Gladiator {
  constructor(name, weapon){
    this.name = name
    this.weapon = weapon
    switch (this.weapon) {
      case 'Trident':
        break;
      case 'Spear':
        break;
      case 'Club':
        break;
      case 'Sword':
        break;
      default:
        console.log("Invalid weapon, choose another.");
    }
  }
}

var max = new Gladiator("Maximus", "Trident")
