class Arena {
  constructor(name){
    //takes the name and makes the first letter uppercase
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = [];
  }
}

let happyland = new Arena("happyland")
console.log(happyland.gladiators)
