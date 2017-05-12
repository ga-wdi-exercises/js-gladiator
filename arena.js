class Arena {
  constructor(name, Gladiators){
    this.capitalize(name);
    this.gladiators = [ ];
  }
  addGladiator(newGladiator){
    if(this.gladiators.length<2) {
      this.gladiators.push(newGladiator);
    } else {
      alert('There is already two gladiators in the arena!')
    }
  }
  fight(){
    if ( (this.gladiators[0].weapon == 'Trident') && (this.gladiators[1].weapon == 'Spear') ) {
      this.gladiators.pop();
    }
    if ( (this.gladiators[0].weapon == 'Spear') && (this.gladiators[1].weapon == 'Club') ) {
      this.gladiators.pop();
    }
    if ( (this.gladiators[0].weapon == 'Club') && (this.gladiators[1].weapon == 'Trident') ) {
      this.gladiators.pop();
    }
    if ( (this.gladiators[0].weapon == 'Spear') && (this.gladiators[1].weapon == 'Trident') ) {
      this.gladiators.shift();
    }
    if ( (this.gladiators[0].weapon == 'Club') && (this.gladiators[1].weapon == 'Spear') ) {
      this.gladiators.shift();
    }
    if ( (this.gladiators[0].weapon == 'Trident') && (this.gladiators[1].weapon == 'Club') ) {
      this.gladiators.shift();
    }
  }
  capitalize(name) {
    this.name = name[0].toUpperCase() + name.slice(1);
  }
}

let colosseum = new Arena('colosseum');
let megalopolis = new Arena("Megalopolis")
