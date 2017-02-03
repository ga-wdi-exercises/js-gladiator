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
}
