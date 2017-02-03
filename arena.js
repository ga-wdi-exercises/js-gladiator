class Arena {
  constructor(name) {
    this.name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    this.gladiators = [];
  }
  addGladiator(gladiator) {
    this.gladiators.push(gladiator);
  }
}
