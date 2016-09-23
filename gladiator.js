function capitalize(name) {
  let nameArray = name.split(' ');
  let newName = '';
  for (let i = 0; i < nameArray.length; i++) {
    newName += (nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1));
    if (i != (nameArray.length - 1)) {
      newName += " ";
    }
  }
  return newName;
  // basic version found here http://alvinalexander.com/javascript/how-to-capitalize-each-word-javascript-string
}

class Gladiator {
  constructor(name, weapon = "fists", arena) {
    let weapons = ["trident", "spear", "club", "fists"];
    if (weapons.indexOf(weapon) !== -1) {
      this.weapon = weapon;
    } else {
      console.log("That's not a real weapon. Looks like you're using your fists");
      this.weapon = "fists";
    }
    this.name = capitalize(name);
    this.wins = 0;
  }
}
