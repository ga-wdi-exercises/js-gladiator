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
  fight () {
    var weap1 = this.fighters[0].weapon
    var weap2 = this.fighters[1].weapon
    if (weap1 === 'trident') {
      switch (weap2) {
        case 'trident':
          this.fighers = [] // same weapon -- tie remove both
          break
        case 'spear':
          this.fighters.pop() // trident beats spear remove fighter 2
          break
        case 'club':
          this.fighters.shift() // club beats trident remove fighter 1
          break
      }
    } else if (weap1 === 'club') {
      switch (weap2) {
        case 'club':
          this.fighers = [] // same weapon -- tie remove both
          break
        case 'spear':
          this.fighters.shift() // spear beats club remove fighter 1
          break
        case 'trident':
          this.fighters.pop() // club beats trident remove fighter 2
          break
      }
    } else if (weap1 === 'spear') {
      switch (weap2) {
        case 'spear':
          this.fighers = [] // same weapon -- tie remove both
          break
        case 'club':
          this.fighters.pop() // spear beats club remove fighter 1
          break
        case 'trident':
          this.fighters.shift() // trident beats spear remove fighter 2
          break
      }
    }
  }
}

// if (this.weapon !== 'spear' || this.weapon !== 'club' || this.weapon !== 'trident') {
//   alert(`Your ${this.weapon} is invalid, please change your weapon before entering the arena or you will be killed`)
// } else {
//   alert(`Your ${this.weapon} is valid, not the one I'd choose, but good luck`)
// }
