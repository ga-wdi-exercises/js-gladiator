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
  fight() {
    if (this.gladiators[0].name === "Maximus") {
      this.gladiators.splice(1, 1);
    } else if (this.gladiators[1].name === "Maximus") {
      this.gladiators.splice(0, 1);
    } else {
      // No gladiator named "Maximus"
      if (this.gladiators[0].weapon === 'Trident') {
        if (this.gladiators[1].weapon === 'Club') {
          this.gladiators.splice(0, 1);
        } else if (this.gladiators[1].weapon === 'Spear') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 2);
        }
      } else if (this.gladiators[0].weapon === 'Spear') {
        if (this.gladiators[1].weapon === 'Trident') {
          this.gladiators.splice(0, 1);
        } else if (this.gladiators[1].weapon === 'Club') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 2);
        }
      } else if (this.gladiators[0].weapon === 'Club') {
        if (this.gladiators[1].weapon === 'Spear') {
          this.gladiators.splice(0, 1);
        } else if (this.gladiators[1].weapon === 'Trident') {
          this.gladiators.splice(1, 1);
        } else {
          this.gladiators.splice(0, 2);
        }
      }
    }

    if (this.gladiators[0].weapon === 'Trident') {
      if (this.gladiators[1].weapon === 'Club') {
        this.gladiators.splice(0, 1);
      } else if (this.gladiators[1].weapon === 'Spear') {
        this.gladiators.splice(1, 1);
      } else {
        this.gladiators.splice(0, 2);
      }
    } else if (this.gladiators[0].weapon === 'Spear') {
      if (this.gladiators[1].weapon === 'Trident') {
        this.gladiators.splice(0, 1);
      } else if (this.gladiators[1].weapon === 'Club') {
        this.gladiators.splice(1, 1);
      } else {
        this.gladiators.splice(0, 2);
      }
    } else if (this.gladiators[0].weapon === 'Club') {
      if (this.gladiators[1].weapon === 'Spear') {
        this.gladiators.splice(0, 1);
      } else if (this.gladiators[1].weapon === 'Trident') {
        this.gladiators.splice(1, 1);
      } else {
        this.gladiators.splice(0, 2);
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
}
