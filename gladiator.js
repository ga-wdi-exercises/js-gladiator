class Gladiator {
  constructor (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  }

var Curtis = new Gladiator('Curtis', 'club');

class Arena {
  constructor(name) {
    this.name = name[0].toUpperCase() + name.slice([1]);
    this.gladiators = [];
  }
    addGladiator(name) {
        this.gladiators.push(name);
      }

}

var hell = new Arena('hell');
