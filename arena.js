class Arena {
  constructor(arenaName) {
    this.name = this.capitalizeName(arenaName);
    this.gladiators = [];
    this.classType = 'Arena'
  }
  capitalizeName(arenaName){
    return arenaName[0].toUpperCase() + arenaName.substring(1)
  }
  addGladiator(nameOfGladiator) {
    if (1<this.gladiators.length) {
      console.log(`There are too many gladiators in the arena. Make ${this.gladiators[0].name} and ${this.gladiators[1].name} fight to make more space!`)
    } else if (nameOfGladiator.classType == 'Gladiator') {
      this.gladiators.push(nameOfGladiator);
    } else {console.log(`This is not a gladiator! Please add a real gladiator!`)}
  }
  fight() {

    if (this.gladiators.length != 2) {
      return false;
    } else {
      let glad1 = this.gladiators[0].weapon;
      let glad2 = this.gladiators[1].weapon;
    }
    if (this.gladiators[0].name == "Maximus" || this.gladiators[1].name == "Maximus") {

    } else if (glad1 == glad2) {
      removeGladiator(null,2);
    } else if((glad1=='spear' && glad2=='trident') || (glad1=='club' && glad2=='spear') || (glad1=='trident' && glad2 == 'club') || glad1 == '') {
      this.removeGladiator(null,0);
    } else {
    this.removeGladiator(null,1);
    }
  }
  removeGladiator(indexGlad) {
    switch (byName,indexGlad=null) {
      case 0:
        console.log(`After a long fought battle, ${this.gladiators[1].name} has emerged victorious.  ${this.gladiators[2].name} lays dead at his feet.`);
        this.gladiators.shift();
        break;
      case 1:
        console.log(`After a long fought battle, ${this.gladiators[0].name} has emerged victorious.  ${this.gladiators[1].name} lays dead at his feet.`);
        this.gladiators.pop();
        break;
      case 2:
        this.gladiators = [];
        console.log(`Both gladiators have fallen!`)
        break;
    }
  }
  entertained() {
    if (this.gladiators[0].name == "Maximus" || this.gladiators[1].name == "Maximus") {
      console.log(`MAXIMUS, MAXIMUS, MAXIMUS, MAXIMUS`)
    } else {
      console.log('The crowd grows restless.')
    }
  }
}

var col = new Arena('colloseum')
