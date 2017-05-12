$( document ).ready(function() {

  class Gladiator {
    constructor (name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
  }

  class Arena {
    constructor (name) {
      this.name = name.charAt(0).toUpperCase() + name.slice(1);
      this.gladiators = [];
    }

    addGladiator (gladiator){
      this.gladiators.push(gladiator);

      if (this.gladiators.length > 2) {
        this.gladiators.pop ()
        console.log ('There can oly be 2 Gladiators in the ring at a time ')
      } else if (this.gladiators.length === 2) {
        this.fight()
      }
    }

    fight () {
      if (this.gladiator[0].weapon === "Spear") {
        if (this.gladiator[1].weapon ==="Trident") {
          console.log ('Trident wins')
        } else if (this.gladiator[1].weapon ==="Club") {
          console.log ('Spear wins')
        }
      } else if (this.gladiator[0].weapon === "Club")  {
        if (this.gladiator[1].weapon ==="Trident") {
          console.log ('Club wins')
        } else if (this.gladiator[1].weapon ==="Spear") {
          console.log ("Spear wins")
        }
      } else if (this.gladiator[0].weapon === "Trident") {
        if (this.gladiator[1].weapon ==="Spear"){
          console.log ('Trient wins')
        } else if (this.gladiator[1].weapon ==="Club") {
          console.log ('Club wins')
        }
       else if (this.gladiator[0].weapon ===this.gladiator[1].weapon){
         console.log ("both dead.")
       }
    }
}
};
});
