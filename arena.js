class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }
  addGladiator(name) {
    this.gladiators.unshift(name);
    if (this.gladiators.length > 2) {
      return this.gladiators.slice(0,2);
    }
  }
}
