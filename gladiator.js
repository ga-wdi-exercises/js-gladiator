class Gladiator {
  constructor(name , weapon) {
    this.name = name;

    if (weapon === "Spear" || "Club" || "Trident") {
      this.weapon = weapon;
    }
    else {
      this.weapon = "Club";
    }
  }
}
