class Gladiator  {
  constructor (name, weapon) {
    this.name = name;
    if (weapon == "trident") {
      this.weapon = weapon;
    } else if (weapon == "spear") {
      this.weapon = weapon;
    } else if (weapon == "club") {
      this.weapon = weapon;
    } else {
      throw ("Illegal weapon! Your champion is barred from entry.");
    }
  }
}

let ian = new Gladiator("Ianus", "trident")
let liza = new Gladiator("Lizae", "spear")
let adrian = new Gladiator("Adrianus", "club")
let max = new Gladiator("Maximus", "spear")
