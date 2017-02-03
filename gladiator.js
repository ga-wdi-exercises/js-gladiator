class Gladiator {
  constructor(nam, weapon) {
    this.name = nam.charAt(0).toUpperCase() + nam.slice(1)
    this.weapon = ((weapon=='spear')||(weapon=='trident')||(weapon=='club'))? weapon:undefined
  }
}
