class Arena {
  constructor(name, gladiators){
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
}
  addGladiator(gladiators){
    this.gladiators.unshift(gladiators);
    if (this.gladiators.length > 2) {
        this.gladiators.pop();
      }
    }
  fight(){
    if (this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Spear") {
      this.gladiators.pop()
    } else if (this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Sword") {
      this.gladiators.pop()
    } else if (this.gladiators[0].weapon == "Sword" && this.gladiators[1].weapon == "Trident") {
      this.gladiators.pop()
    } else if (this.gladiators[0].weapon == this.gladiators[1].weapon) {
      this.gladiators.pop()
      this.gladiators.shift()
    }
  }

}
