class Gladiator {
  constructor(name, weapon) {
    let w = weapon.toLowerCase();
    if(w === "trident" || w === "spear" || w === "club") {
      this.name = name
      this.weapon = weapon
    } else {
      alert("Must select one of the 3 weapons, try again!")
    }
  }
}

// let max = new Gladiator ("Maximus","Trident");
// let bru = new Gladiator ("Brutus","Spear");
// let her = new Gladiator ("Hercules","Club");
