class Gladiator {
  constructor(name, weapon){
    this.name = name;
    if (weapon === "spear" || weapon === "club" || weapon === "trident") {
      this.weapon = weapon;
    }
    else {
      alert("You didn't choose the right weapon for your Gladiator.");
    }
  }
}
