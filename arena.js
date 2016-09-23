class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }
  addGladiator(gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator);
    } else {
      console.error('There are already 2 warriors in the arena');
    }
  }

  fight() {
    let glad1 = this.gladiators[0];
    let glad2 = this.gladiators[1];
     if (glad1.weapon == ('Trident' || 'Club') && glad2.weapon == ('Spear' || 'Club')) {
      this.gladiators.splice(1, 1);
    }
    else if (glad1.weapon == ('Spear' || 'Trident') && glad2.weapon == ('Club' ||' Trident')) {
      this.gladiators.splice(0, 1);
    }
    else if (glad1.weapon == ('Club' || 'Spear')&& glad2.weapon == 'Trident' || 'Spear' ) {
      this.gladiators.splice(1, 1);
    }
    else {
      alert(`${glad1}, ${glad2} are dead!`)
    }
  }
}
  var colosseum = new Arena("colosseum")
  console.log(colosseum.name) // => Colosseum
  var max = new Gladiator("Maximus","Trident")
  var titus = new Gladiator("Titus","Sword")
  colosseum.addGladiator(max)
  colosseum.addGladiator(titus)
  colosseum.fight()
  console.log(colosseum.gladiators) // => [max]
