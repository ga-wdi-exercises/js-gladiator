class Gladiator {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon.charAt(0).toUpperCase() + weapon.slice(1).toLowerCase();
    switch(this.weapon) {
       case "Trident":
        break;
       case "Spear":
        break;
       case "Sword":
        break;
       default:
        throw "Not an allowed weapon!";
        break;

    }
  }
}
