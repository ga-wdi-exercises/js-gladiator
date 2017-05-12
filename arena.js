class Arena {
  constructor(name) {
    this.name = name;
    this.gladiators = [];
  }
  addGladiator(gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator);
    }
  }
  fight() {
    if (this.gladiators[0].weapon === "Trident") {
      if (this.gladiators[1].weapon !== "Trident") {
        this.gladiators = [this.gladiators[0]];
        } else this.gladiators = [];
      } else if (this.gladiators[0].weapon === "Spear") {
        if (this.gladiators[1].weapon === "Trident") {
          this.gladitors = [this.gladitors[1]];
        } else if (this.gladitors[1].weapon === "Club") {
          this.gladitors = [this.gladiators[0]];
        } else this.gladitors = [];
      } else if (this.gladitors[0].weapon === "Club") {
        if (this.gladiators[1].weapon !== "Club") {
          this.gladiators = [this.gladiators[1]];
      } else this.gladiators = [];
    }
  }
}


var arena = new Arena("coliseo");
