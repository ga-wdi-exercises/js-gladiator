class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator(newGlad) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(newGlad)
    } else { console.log('already combatants there!')}
  }
  fight() {
    var a = this.gladiators[0].weapon
    var b = this.gladiators[1].weapon
    if (a == 'Maximus'){
      this.gladiators.splice(1,1)
    }
    else if (b == 'Maximus'){
      this.gladiators.splice(0,1)
    }
    else if ((((a=='spear')&&(b=='club'))||((a=='club')&&(b=='trident')))||((a=='trident')&&(b=='spear'))) {
      this.gladiators.splice(1,1)
    }
    else if ((((b=='spear')&&(a=='club'))||((b=='club')&&(a=='trident')))||((b=='trident')&&(a=='spear'))) {
      this.gladiators.splice(0,1)
    }
    else {
      this.gladiators.splice(0,2)
    }
  }
  remove(name) {
    var self = this
    self.gladiators.forEach(function(glad) {
      if (name==glad) {
        self.gladiators.splice(self.gladiators.indexOf(glad),1);
      }
    })
  }

}
