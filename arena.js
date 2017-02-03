class Arena {
  constructor(name) {
    this.name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    this.gladiators = [];
  }
  addGladiator(gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator);
    }
  }
  fight() {
    if (this.gladiators.length === 2) {
      let a = this.gladiators[0];
      let b = this.gladiators[1];
      if (a.weapon === b.weapon) {
        this.gladiators = [];
      } else if (a.weapon === 'trident') {
        if (b.weapon === 'spear') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 1);
        }
      } else if (a.weapon === 'spear') {
        if (b.weapon === 'club') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 1);
        }
      } else {
        if (b.weapon === 'trident') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 1);
        }
      }
    }
  }
}
