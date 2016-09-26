class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    switch (weapon) {
      case "Sword":
      this.weapon = weapon;
        break;
        case "Trident":
      this.weapon = weapon;
      break;
      case "Spear":
      this.weapon = weapon;
      default:
      document.write("Choosen weapon not allowed!");
        alert("Choosen weapon not allowed!");
    }
  }
}
let max = new Gladiator("Maximus","Trident")

let titus = new Gladiator("Titus","Sword")

let andronicus = new Gladiator("Andronicus","Sword")


console.log(max.name)
console.log(max.weapon)
