String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Gladiator {
  constructor(name, weapon){
    this.name = name.capitalize()
    if (weapon.capitalize() == "Spear" || weapon.capitalize() == "Club" || weapon.capitalize() == "Trident") {
      this.weapon = weapon.capitalize()
    } else {
      this.weapon = "Unarmed"
      console.log("Error: " + weapon + " is not a valid Weapon for a Galdiator.");
      console.log("Confiscating " + weapon);
    }
  }
}

var max = new Gladiator("maximus","trident")
console.log(max)

var cow = new Gladiator("Bessie the Cow","Cowbell")
console.log(cow)

var chicken = new Gladiator("Doom Chicken", "Spear")
console.log(chicken);

var turtle = new Gladiator("Slow Franklin the Turtle", "club")
console.log(turtle);

var sloth = new Gladiator("Slower Peggy the Sloth", "Trident")
console.log(sloth);

var slug = new Gladiator("Slowest Becky the Slug", "fist")
console.log(slug);

var pig = new Gladiator("Porkchop", "flowers")
console.log(pig);
