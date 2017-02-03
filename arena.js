class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
  }
}

var colosseum = new Arena("Colosseum")
var megapolis = new Arena("megapolis")
