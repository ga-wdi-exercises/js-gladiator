console.log('welcome to the jungle!')

class Arena {
  constructor (name) {
    this.name = name
    this.fighters = []
  }
  addGladiator (fighter) {
    if (this.fighters.length >= 2) {
      alert('fighting grounds are full')
    } else {
      return this.fighters.push(fighter)
    }
  }
}


if (this.weapon !== 'spear' || this.weapon !== 'club' || this.weapon !== 'trident') {
  alert(`Your ${this.weapon} is invalid, please change your weapon before entering the arena or you will be killed`)
} else {
  alert(`Your ${this.weapon} is valid, not the one I'd choose, but good luck`)
}
