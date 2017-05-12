class Gladiator {
  constructor(name, weapon){
    if(weapon == "Spear" || weapon == "Club" || weapon == "Trident"){
      this.name = name;
      this.weapon = weapon;
    } else {
      throw Error("Choose a valid weapon");
    }
  }
}



let shortnd = new Gladiator("Shortnd", "Trident");
let taco = new Gladiator("Eric", "Trident");
