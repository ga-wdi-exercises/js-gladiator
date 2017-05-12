class Gladiator {
  constructor(name, weapon){
    this.name = name
    this.weapon = weapon
      switch (this.weapon) {
        case "Trident":
          break;
        case "Sword":
          break;
        case "Spear":
          break;
        default:
          console.log("Not a valid weapon!");
          break;
    }
  }
}
