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
      let aWins = () => this.gladiators.pop();
      let bWins = () => this.gladiators.shift();
      if (a.name === 'Maximus') {
        aWins();
      } else if (b.name === 'Maximus') {
        bWins();
      } else if (a.weapon === b.weapon) {
        this.gladiators = [];
      } else if (a.weapon === 'trident') {
        if (b.weapon === 'spear') {
          aWins();
        } else {
          bWins();
        }
      } else if (a.weapon === 'spear') {
        if (b.weapon === 'club') {
          aWins();
        } else {
          bWins();
        }
      } else {
        if (b.weapon === 'trident') {
          aWins();
        } else {
          bWins();
        }
      }
    }
  }
  removeByName(gladiatorName) {
    for (let i = 0; i < this.gladiators.length; i++) {
      if (this.gladiators[i].name === gladiatorName) {
        this.gladiators.splice(i, 1);
      }
    }
  }
  isEntertained() {
    if (this.gladiators[0].name === 'Maximus') {
      return true;
    } else if (this.gladiators[1] === 'Maximus') {
      return true;
    } else {
      return false;
    }
  }
}
