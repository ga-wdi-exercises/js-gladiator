class Gladiator {
  constructor(gladName , weapon) {
    this.gladName = gladName;

    if (weapon === "Spear" || "Club" || "Trident") {
      this.weapon = weapon;
    }
    else {
      this.weapon = "Club";
    }
  }
}
