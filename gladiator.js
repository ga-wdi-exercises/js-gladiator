class Gladiator {
  constructor (name, weapon) {
    this.validweapons = ['spear','club','trident'];
    this.name = name;
    for(var i = 0; i < this.validweapons.length; i++) {
      if(weapon === this.validweapons[i]) {
        this.weapon = weapon;
      }
    }
     else {
        new Error('Not a Valid Weapon!')
      }
  }
}

var Al = new Gladiator('Al', 'trident');
var James = new Gladiator('James', 'trident');

class Arena {
  constructor(name) {
    this.name = name[0].toUpperCase() + name.slice([1]);
    this.gladiators = [];
  }
    addGladiator(name) {
        if(this.gladiators.length >= 2) {
          console.log('only two fighters aloud. stop trying to cheat.')
        }
        else {
        this.gladiators.push(name);
        }
    }
    fight() {
      if(this.gladiators.length !== 2) {
        console.log('there must be 2 fighters!')
      }
      else if(this.gladiators[0].weapon === 'spear' && this.gladiators[1].weapon === 'trident') {
        this.gladiators.splice(0);
      }
      else if(this.gladiators[0].weapon === 'trident' && this.gladiators[1].weapon === 'spear') {
        this.gladiators.splice(1);
      }
      else if(this.gladiators[0].weapon === 'spear' && this.gladiators[1].weapon === 'club') {
          this.gladiators.splice(1);
        }
      else if(this.gladiators[0].weapon === 'club' && this.gladiators[1].weapon === 'spear') {
          this.gladiators.splice(0);
      }
      else if(this.gladiators[0].weapon === 'trident' && this.gladiators[1].weapon === 'club') {
          this.gladiators.splice(0);
        }
      else if(this.gladiators[0].weapon === 'club' && this.gladiators[1].weapon === 'trident') {
          this.gladiators.splice(2);
        }
      else {
        this.gladiators = [];
          console.log('they both lose!');
      }
    }
}

var hell = new Arena('hell');

var hell = new Arena('hell');
