class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiators (gladiator) {
    if (this.gladiators.length >= 2) {
      throw 'No more than 2 gladiators in the area at a time sir!'
    } else {
      this.gladiators.push(gladiator)
    }
  }
  remove (name) {
    this.gladiators.splice(this.gladiators.indexOf(name), 1)
  }

  fight () {
    if (this.gladiators.length === 2) {
      let weapon1 = this.gladiators[0].weapon
      let weapon2 = this.gladiators[1].weapon
      if (weapon1 === weapon2) { // Same weapons
        this.gladiators = []
        console.log('Everyone is dead sir!')
      }
      if (weapon1 === 'Trident') { // Case one
        switch (weapon2) {
          case 'Spear':
            this.gladiators.pop()
            console.log(`${this.gladiators[0].name} wins! with ${this.gladiators[0].weapon}`)
            break
          case 'Club':
            this.gladiators.shift()
            console.log(`${this.gladiators[0].name} wins! with ${this.gladiators[0].weapon}`)
            break
        }
      } else if (weapon1 === 'Spear') { // Case two
        switch (weapon2) {
          case 'Trident':
            this.gladiators.shift()
            console.log(`${this.gladiators[0].name} wins! with ${this.gladiators[0].weapon}`)
            break
          case 'Club':
            this.gladiators.pop()
            console.log(`${this.gladiators[0].name} wins! with ${this.gladiators[0].weapon}`)
            break
        }
      } else if (weapon1 === 'Club') { // Case three
        switch (weapon2) {
          case 'Trident':
            this.gladiators.pop()
            console.log(`${this.gladiators[0].name} wins! with ${this.gladiators[0].weapon}`)
            break
          case 'Spear':
            this.gladiators.shift()
            console.log(`${this.gladiators[0].name} wins! with ${this.gladiators[0].weapon}`)
            break
        }
      }
    } else {
      throw "It's just not possible sir!"
    }
  }
}
