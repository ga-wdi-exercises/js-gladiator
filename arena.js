function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

class Arena {
  constructor(name, gladiators){
    this.name = toTitleCase(name);
    this.gladiators = gladiators;

}
  addGladiators(name){
    if (addGladiators = 2){
     return `let the fight begin `
}
else `error`
}

// let max = new Gladiator("Maximus","Trident")
// // let titus = new Gladiator("Titus","Sword")
// let andronicus = new Gladiator("Andronicus","Sword")
let colosseum = new Arena("Colosseum")
// let colosseum = new Arena("megalopolis")
colosseum.addGladiator(max)
// colosseum.addGladiator(titus)
// colosseum.addGladiator(andronicus)
// console.log(colosseum.name)
console.log(colosseum.gladiators)
// console.log(colosseum.gladiators.length) // => 2
