var audio = new Audio('American Gladiators - Intro.mp3');
audio.play();
//except sound wouldn't work for me, that would have been worth at least 11 bonus points

class Gladiator {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
    if (weapon === "Spear" || weapon === "Club" || weapon === "Trident"){

    }
    else {
      alert("Invalid weapon! Are you trying to get your gladiator killed!?");
      this.weapon = null;
      //bonus completed, what's up
    }

  }

}
var max = new Gladiator("Maximus", "Trident")
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident"
