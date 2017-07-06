class Gladiator {

  constructor (nme, value) {
    this.name = nme
    this.weapon = null
    this.wp = null

    if (value === 1) {
      this.weapon = 'spear'
      this.wp = 1
    } else if (value === 2) {
      this.weapon = 'club'
      this.wp = 2
    } else if (value === 3) {
      this.weapon = 'trident'
      this.wp = 3
    } else {
    // try again
    }
  }

}
