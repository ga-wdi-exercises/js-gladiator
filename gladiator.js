console.log('running')

class Gladiator {
  constructor (nm, wp) {
    this.name = nm
    this.weapon = wp
  }
}

const maximus = new Gladiator('maximus', 'spear')
const titus = new Gladiator('titus', 'trident')
const brutus = new Gladiator('brutus', 'club')

class Arena {
  constructor (nm) {
    this.name = nm
    this.gladiators = []
  }
  addGladd (glad) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(glad)
      return `${glad.name} has entered the Arena with a ${glad.weapon}`
    } else {
      return `${this.name} is full Right now`
    }
  }
  fight () {
    if (this.gladiators.length < 2) {
      return 'We Need another Gladiator'
    }

    if (this.gladiators[0].weapon === 'spear') {
      if (this.gladiators[1].weapon === 'trident') {
        console.log(`${this.gladiators[0].name} has been eliminated from the ${this.name}`)
        this.gladiators.shift()
      }
      else if (this.gladiators[1].weapon === 'club') {
        console.log(`${this.gladiators[1].name} has been eliminated from the ${this.name}`)
        this.gladiators.pop()
      }
      else if (this.gladiators[1].weapon === 'spear') {
        console.log(`Both Gladiators have been eliminated from the ${this.name}`)
        this.gladiators.pop()
        this.gladiators.pop()
      }
    }
    else if (this.gladiators[0].weapon === 'trident') {
      if (this.gladiators[1].weapon === 'club') {
        console.log(`${this.gladiators[0].name} has been eliminated from the ${this.name}`)
        this.gladiators.shift()
      }
      else if (this.gladiators[1].weapon === 'spear') {
        console.log(`${this.gladiators[1].name} has been eliminated from the ${this.name}`)
        this.gladiators.pop()
      }
      else if (this.gladiators[1].weapon === 'trident') {
        console.log(`Both Gladiators have been eliminated from the ${this.name}`)
        this.gladiators.pop()
        this.gladiators.pop()
      }
    }
    else if (this.gladiators[0].weapon === 'club') {
      if (this.gladiators[1].weapon === 'spear') {
        console.log(`${this.gladiators[0].name} has been eliminated from the ${this.name}`)
        this.gladiators.shift()
      }
      else if (this.gladiators[1].weapon === 'trident') {
        console.log(`${this.gladiators[1].name} has been eliminated from the ${this.name}`)
        this.gladiators.pop()
      }
      else if (this.gladiators[1].weapon === 'club') {
        console.log(`Both Gladiators have been eliminated from the ${this.name}`)
        this.gladiators.pop()
        this.gladiators.pop()
      }
    }
  }
}

const col = new Arena('coliseum')
col.addGladd(titus)
col.addGladd(brutus)
