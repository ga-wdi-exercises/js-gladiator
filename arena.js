
class Arena {
  constructor (name, fighters) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.fighters = []
  }

  addGladiator (fighter) {
    if (this.fighters.length < 2) {
      return this.fighters.push(fighter)
    } else {
      return 'Too many gladiators in the arena!'
    }
  }

  removeGladiator (name) {
    this.fighters = this.fighters.filter((gladiators) => {
      return gladiators.name !== name
    })
  }

  fight () {
    var trident = 'Trident'
    var spear = 'Spear'
    var club = 'Club'
    var weaponOne = this.fighters[0].weapon
    var weaponTwo = this.fighters[1].weapon

    if (this.fighters.length !== 2) {
      return 'Not enough fighters'
    } else {
      if (this.fighters[0].name === 'Maximus' || this.fighters[1].name === 'Maximus') {
        this.fighters = this.fighters.filter((gladiators) => {
          return gladiators.name === 'Maximus'
        })
        return 'Maximus Wins!'
      } else if (weaponOne === weaponTwo) {
        this.fighters = []
        return `Both fighters lose!`
      } else if (weaponOne === trident && weaponTwo === spear) {
        this.fighters.pop()
        return `${this.fighters[0].name} wins!`
      } else if (weaponOne === spear && weaponTwo === trident) {
        this.fighters.shift()
        return `${this.fighters[0].name} wins!`
      } else if (weaponOne === spear && weaponTwo === club) {
        this.fighters.pop()
        return `${this.fighters[0].name} wins!`
      } else if (weaponOne === club && weaponTwo === spear) {
        this.fighters.shift()
        return `${this.fighters[0].name} wins!`
      } else if (weaponOne === club && weaponTwo === trident) {
        this.fighters.pop()
        return `${this.fighters[0].name} wins!`
      } else if (weaponOne === trident && weaponTwo === club) {
        this.fighters.shift()
        return `${this.fighters[0].name} wins!`
      }
    }
  }
}






    // if (this.fighters.length < 2) {
    //   return 'Not enough gladiators to fight!'
    // } else if (this.fighters.name[0] === 'Maximus' || this.fighters.name[1] === 'Maximus') {
    //   return 'Maximus wins!'
    // } else {
    //   var weaponOne = this.fighters[0].weapon
    //   var weaponTwo = this.fighters[1].weapon
    //     if (weaponOne === weaponTwo) {
    //       this.fighters = []
    //       return 'Both fighters were eliminated!'
    //     } else if (this.fighters.weapon.some('Spear') && this.fighters.weapon.some('Trident')) {
    //         this.fighters.weapon.pop('Spear')
    //     }
    //   }
    // }


// Trident beats Spear
// - Spear beats Club
// - Club beats Trident
