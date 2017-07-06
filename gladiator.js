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
        this.gladiators.shift()
      }
      else if (this.gladiators[1].weapon === 'club') {
        this.gladiators.pop()
      }
      else if (this.gladiators[1].weapon === 'spear') {
        this.gladiators.pop()
        this.gladiators.pop()
      }
    }
    else if (this.gladiators[0].weapon === 'trident') {
      if (this.gladiators[1].weapon === 'club') {
        this.gladiators.shift()
      }
      else if (this.gladiators[1].weapon === 'spear') {
        this.gladiators.pop()
      }
      else if (this.gladiators[1].weapon === 'trident') {
        this.gladiators.pop()
        this.gladiators.pop()
      }
    }
    else if (this.gladiators[0].weapon === 'club') {
      if (this.gladiators[1].weapon === 'spear') {
        this.gladiators.shift()
      }
      else if (this.gladiators[1].weapon === 'trident') {
        this.gladiators.pop()
      }
      else if (this.gladiators[1].weapon === 'club') {
        this.gladiators.pop()
        this.gladiators.pop()
      }
    }
  }
}

const col = new Arena('coliseum')
col.addGladd(titus)
col.addGladd(brutus)
