class Arena {
  constructor(name, Gladiators){
    this.name = name;
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
}

let colosseum = new Arena('colosseum');
let megalopolis = new Arena("Megalopolis")


// Object.freeze(Arena);
//The name of the Arena should be capitalized
//bug: You can change gladiators by colosseum.gladiators = ['alpha', 'beta'];
