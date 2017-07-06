class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }

  addGladiator (glad) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(glad)
    } else {
      console.log('Too many gladiators in the ring, only the first 2 may fight!')
    }
  }

  removeGladiator (name) {
    this.gladiators = this.gladiators.filter((gladiator) => { return gladiator.name !== name })
  }

  fight () {
    if (this.gladiators.length === 2) {
      var weaponOne = this.gladiators[0].weapon
      var weaponTwo = this.gladiators[1].weapon

      if (this.gladiators[0].name === 'Maximus' || this.gladiators[1].name === 'Maximus') {
        this.gladiators = this.gladiators.filter((gladiator) => { return gladiator.name === 'Maximus' })
        return 'Maximus Wins!'
      } else if (weaponOne === weaponTwo) {
        this.gladiators = []
        return `Nobody wins!`
      } else if (weaponOne === 'Trident' && weaponTwo === 'Spear') {
        this.gladiators.pop()
        return `${this.gladiators[0].name} wins!`
      } else if (weaponOne === 'Spear' && weaponTwo === 'Trident') {
        this.gladiators.shift()
        return `${this.gladiators[0].name} wins!`
      } else if (weaponOne === 'Spear' && weaponTwo === 'Club') {
        this.gladiators.pop()
        return `${this.gladiators[0].name} wins!`
      } else if (weaponOne === 'Club' && weaponTwo === 'Spear') {
        this.gladiators.shift()
        return `${this.gladiators[0].name} wins!`
      } else if (weaponOne === 'Club' && weaponTwo === 'Trident') {
        this.gladiators.pop()
        return `${this.gladiators[0].name} wins!`
      } else if (weaponOne === 'Trident' && weaponTwo === 'Club') {
        this.gladiators.shift()
        return `${this.gladiators[0].name} wins!`
      }
    } else {
      return 'Not enough fighters!'
    }
  }
}
