function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
class Arena {
  constructor (name, gladiators){
    this.name = toTitleCase(name);
    this.gladiators= [];
  }
}
var colosseum = new Arena ("colOsseUm")
function addGladiator(){}

console.log(colosseum.gladiators)
colosseum.addGladiator(max)
