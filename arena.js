class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }
  addGladiator(gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator)
    } else {
      console.error('There are already two combatants in the Arena');
    }
  }
  fight() {
    let glad1 = this.gladiators[0];
    let glad2 = this.gladiators[1];
    if (glad1.weapon == glad2.weapon) {
      this.gladiators.splice(0, 2);
    }
    if (glad1.weapon == 'spear' && glad2.weapon == 'trident') {
      this.gladiators.splice(0, 1);
    }
    if (glad1.weapon == 'club' && glad2.weapon == 'spear') {
      this.gladiators.splice(0, 1);
    }
    if (glad1.weapon == 'trident' && glad2.weapon == 'club') {
      this.gladiators.splice(0, 1);
    }
    else {
      this.gladiators.splice(1, 1);
    }
  }
}

 const Coliseum = new Arena('Coliseum');
 Coliseum.addGladiator(Maximus);
 Coliseum.addGladiator(Apollo);
