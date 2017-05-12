String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Arena {
  constructor(name) {
    this.name = name.capitalize()
    this.gladiators = []

  }
  addGladiator(contestant) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(contestant)
      console.log("Get in there, " + contestant.name + "!");
    } else {
      console.log("Error: This is a not a tag-team battle.");
    }
  }
  fight() {
    console.log("MORTAL KOMBAT!!!!");
    if (this.gladiators[0].weapon == "Maximus") {
      this.gladiators.pop()
      console.log("You do not have a choice in Maximus' victory!");
      console.log(this.gladiators);
    } else if (this.gladiators[1].weapon == "Maximus") {
      this.gladiators.shift()
      console.log("You do not have a choice in Maximus' victory!");
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Spear") {
      var thumb = prompt(colosseum.gladiators[0].name + " is victorious. " + colosseum.gladiators[1].name + " is the loser. Shall we spare them? Thumb [up] or [down].")
      if (thumb == "up") {
        this.gladiators.shift()
      } else if (thumb == "down") {
        this.gladiators.pop()
      }
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Club") {
      var thumb = prompt(colosseum.gladiators[0].name + " is victorious. " + colosseum.gladiators[1].name + " is the loser. Shall we spare them? Thumb [up] or [down].")
      if (thumb == "up") {
        this.gladiators.shift()
      } else if (thumb == "down") {
        this.gladiators.pop()
      }
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Trident") {
      var thumb = prompt(colosseum.gladiators[0].name + " is victorious. " + colosseum.gladiators[1].name + " is the loser. Shall we spare them? Thumb [up] or [down].")
      if (thumb == "up") {
        this.gladiators.shift()
      } else if (thumb == "down") {
        this.gladiators.pop()
      }
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Club") {
      var thumb = prompt(colosseum.gladiators[0].name + " is victorious. " + colosseum.gladiators[0].name + " is the loser. Shall we spare them? Thumb [up] or [down].")
      if (thumb == "up") {
        this.gladiators.pop()
      } else if (thumb == "down") {
        this.gladiators.shift()
      }
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Spear") {
      var thumb = prompt(colosseum.gladiators[0].name + " is victorious. " + colosseum.gladiators[0].name + " is the loser. Shall we spare them? Thumb [up] or [down].")
      if (thumb == "up") {
        this.gladiators.pop()
      } else if (thumb == "down") {
        this.gladiators.shift()
      }
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Trident") {
      var thumb = prompt(colosseum.gladiators[0].name + " is victorious. " + colosseum.gladiators[0].name + " is the loser. Shall we spare them? Thumb [up] or [down].")
      if (thumb == "up") {
        this.gladiators.pop()
      } else if (thumb == "down") {
        this.gladiators.shift()
      }
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == this.gladiators[1].weapon) {
      if (this.gladiators[0].weapon == "Unarmed") {
        console.log("They hug it out! Nobody dies.");
        console.log(this.gladiators);
      } else {
        this.gladiators == []
        console.log("It's a double kill!");
        console.log(this.gladiators);
      }
    } else if (this.gladiators[1].weapon == "Unarmed" && this.gladiators[0].weapon != "Unarmed") {
      this.gladiators.pop()
      console.log("Next time, don't forget your weapon. You have no choice in this.");
      console.log(this.gladiators);
    } else if (this.gladiators[0].weapon == "Unarmed" && this.gladiators[1].weapon != "Unarmed") {
      this.gladiators.shift()
      console.log("Next time, don't forget your weapon. You have no choice in this.");
      console.log(this.gladiators);
    }
  }
  entertained() {
    if (this.gladiators[0].name == "Maximus" || this.gladiators[1].name == "Maximus") {
      console.log("The crowd is loving it!");
    } else {
      console.log("The crowd is looking at their anachronistic phones");
    }
  }
  removeGladiator(victim) {
    if (this.gladiators[0].name == victim) {
      this.gladiators.shift()
      console.log("Get out of there, " + victim + ".");
      console.log(this.gladiators)
    } else if (this.gladiators[1].name == victim) {
      this.gladiators.pop()
      console.log(this.gladiators)
    }
  }
}

var colosseum = new Arena("colosseum")
console.log(colosseum);

colosseum.addGladiator(max)
console.log(colosseum.gladiators);
colosseum.addGladiator(cow)
console.log(colosseum.gladiators);
colosseum.addGladiator(chicken)
console.log(colosseum.gladiators);
