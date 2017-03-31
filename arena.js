class Arena {
  constructor(arenaname) {
    this.arenaname = arenaname.toUpperCase();
    this.gladiators = [];

  }
  arenanamecap() {
  return arenaname.charAt(0).toUpperCase() + arenaname.slice(1);
  }
  addGladiator (smashbro) {
      this.Gladiator.add(smashbro);
      console.log(mutecity.gladiators);

    }
}
var mutecity = new Arena("MuteCity")


/*/capacity() {
  if (Gladiator >3) {
  return "Can't bring more than 2 gladiators into the arena."
  }
}
*/
