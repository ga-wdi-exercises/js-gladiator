class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator (name) {
    if (colosseum.gladiators.length < 2) {
      this.gladiators.push(name)
    } else {
      return 'error too many fighters'
    }
  }
  remove (name) {
    this.gladiators.splice(name, 1)
  }
  entertained () {
    if (this.gladiators[0].name === "Maximus" || this.gladiators[1].name === "Maximus") {
      return "YES WE ARE"
    } else {
      return "NOPE!!"
    }
  }
  fight () {
    let wep1 = this.gladiators[0].weapon
    let wep2 = this.gladiators[1].weapon
    if (this.gladiators[0].name === "Maximus") {
      this.gladiators.pop()
    } else if (this.gladiators[1].name) {
      this.gladiators.shift()
    } else if (wep1 === 'Spear') {
      switch (wep2) {
        case 'Spear':
          this.gladiators = []
          break
        case 'Club':
          this.gladiators.pop()
          break
        case 'Trident':
          this.gladiators.shift()
      }
    } else if (wep1 === 'Club') {
      switch (wep2) {
        case 'Club':
          this.gladiators = []
          break
        case 'Spear':
          this.gladiators.shift()
          break
        case 'Trident':
          this.gladiators.pop()
      }
    } else if (wep1 === 'Trident') {
      switch (wep2) {
        case 'Spear':
          this.gladiators.splice(name, 1)
          break
        case 'Club':
          this.gladiators.shift()
          break
        case 'Trident':
          this.gladiators = []

      }
    }
  }
}

var titus = new Gladiator('Titus', 'Spear')
var max = new Gladiator('Maximus', 'Club')
var colosseum = new Arena('Colosseum')
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
