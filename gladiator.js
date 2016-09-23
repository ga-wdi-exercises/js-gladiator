class Gladiator {
  constructor(name, weapon) {
  // Prevents Creating Gladiators from using non-specified Weapons
    if ((weapon === "Spear") ||
        (weapon === "Club") ||
        (weapon === "Trident")){
          this.name = name;
          this.weapon = weapon;  
    } else {
      console.error("Choose another weapon");
    }
  }
}

//Gladiators
const ash = new Gladiator("Ash","Spear");
const misty = new Gladiator("Misty","Club");
const may = new Gladiator("May", "Trident");
const brock = new Gladiator("Brock", "Heart Emoji");
