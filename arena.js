class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }

  addGladiator (gladiator) {
    if (!this.isFull()) {
      this.gladiators.push(gladiator)
    }
  }
  isFull () {
    return this.gladiators.length === 2
  }

  entertained () {
    var maximus = this.gladiators.filter((gladiator) => {
      return gladiator.name === 'Maximus'
    })

    if (maximus.length > 0) {
      return true
    } else {
      return false
    }
  }

  eliminate (man1, man2 = null) {
    var glads = this.gladiators

    if (man2 === null) {
      glads.splice(glads.indexOf(man1), 1)
    } else {
      glads.splice(glads.indexOf(man1), 1)
      glads.splice(glads.indexOf(man2), 1)
    }
  }

  fight () {
    if (this.isFull()) {
      var alien = this.gladiators[0]
      var predator = this.gladiators[1]

      if (alien.name === 'Maximus') {
        // Maximus wins
        this.eliminate(predator)
      } else if (predator.name === 'Maximus') {
        // Maxius wins
        this.eliminate(alien)
      } else if (alien.weapon === predator.weapon) {
        // If the two gladiators have the same weapon, they are both eliminated
        this.eliminate(alien, predator)
      } else if (alien.weapon === 'Trident') {
        if (predator.weapon === 'Spear') {
          // Trident beats Spear
          this.eliminate(predator)
        } else {
          // Club beats Trident
          this.eliminate(alien)
        }
      } else if (alien.weapon === 'Spear') {
        if (predator.weapon === 'Club') {
         // Spear beats Club
          this.eliminate(predator)
        } else {
          // Trident Beats Spear
          this.eliminate(alien)
        }
      }
    } else {
      if (predator.weapon === 'Trident') {
        // Club beats Trident
        this.eliminate(predator)
      } else {
        // Spear beats Club
        this.eliminate(alien)
      }
    }
  }
}
