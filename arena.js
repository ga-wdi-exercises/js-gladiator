class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
    this.weapons = ['Trident', 'Spear', 'Club'];
  }
  addGladiator(name) {
    this.gladiators.unshift(name);
    if (this.gladiators.length > 2) {
      return this.gladiators = this.gladiators.slice(0,2);
    }
  }
  weaponTest(glad1, glad2) {

  }
  fight() {
    let gladiator0 = this.gladiators[0];
    let gladiator1 = this.gladiators[1];

    if (gladiator0.name === "Maximus") {
      this.gladiators.splice(1, 1);
    } else if (gladiator1.name === "Maximus") {
      this.gladiators.splice(0, 1);
    } else {
      // No gladiator named "Maximus"
      if (gladiator0.weapon === 'Trident') {
        if (gladiator1.weapon === 'Club') {
          this.gladiators.splice(0, 1);
        } else if (gladiator1.weapon === 'Spear') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 2);
        }
      } else if (gladiator0.weapon === 'Spear') {
        if (gladiator1.weapon === 'Trident') {
          this.gladiators.splice(0, 1);
        } else if (gladiator1.weapon === 'Club') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 2);
        }
      } else if (gladiator0.weapon === 'Club') {
        if (gladiator1.weapon === 'Spear') {
          this.gladiators.splice(0, 1);
        } else if (gladiator1.weapon === 'Trident') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 2);
        }
      }
    }
  }

  removeGladiator(name) {
    this.gladiators.forEach((gladiator, i) => {
      if(gladiator.name === name) {
        this.gladiators.splice(i, 1);
      }
    })
  }
  entertained() {
    this.gladiators.forEach((item) => {
      if (item.name === "Maximus") {
        console.log("Crowd is entertained!");
      }
    })
  }

}
