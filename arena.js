class Arena {
  constructor (name) {
    this.name = name[0].toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator (gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator)
    } else {
      console.log('Too Many Gladiators')
    }
  }

  removeGladiator (gladiatorName) {
    for (var i = 0; i < this.gladiators.length; i++) {
      if (this.gladiators[i].name === gladiatorName) {
        this.gladiators.splice(i, 1)
      }
    }
    }

  fight () {
    if (this.gladiators.length === 2) {
      if (this.gladiators[0].name === 'Maximus' || this.gladiators[1].name === 'Maximus') {
        this.gladiators = []
        this.gladiators.push(max)
      }
      else if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear') {
        this.gladiators.splice(1)
      } else if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club') {
        this.gladiators.splice(1)
      } else if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident') {
        this.gladiators.splice(1)
      } else if (this.gladiators[1].weapon === 'Trident' && this.gladiators[0].weapon === 'Spear') {
        this.gladiators.splice(0, 1)
      } else if (this.gladiators[1].weapon === 'Spear' && this.gladiators[0].weapon === 'Club') {
        this.gladiators.splice(0, 1)
      } else if (this.gladiators[1].weapon === 'Club' && this.gladiators[0].weapon === 'Trident') {
        this.gladiators.splice(0, 1)
      } else if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
        this.gladiators = []
      } else {
        console.log("It's a draw")
      }
    }
    else {
      console.log("You need more gladiators")
    }
  }
  }
