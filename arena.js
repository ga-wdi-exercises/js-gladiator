function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

class Arena {
    constructor(name, gladiators){
    this.name = toTitleCase(name);
    this.gladiators =[];
  }
  // addGladiator(name){
  //   if (this.gladiators <= 2)
  //     this.gladiators.push
  // }

}
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
  var colosseum = new Arena("colosseum")
  console.log(colosseum.gladiators)


  //
  // var max = new Gladiator("Maximus","Spear")
  // var colosseum = new Arena("Colosseum")
  // colosseum.addGladiator(max)
  // console.log(colosseum.gladiators)




  // var billy = new Gladiator("Billy","Trident")
  // var jack = new Gladiator("Jack","Club")

  // colosseum.addGladiator(max)
  // colosseum.addGladiator(billy)
  // colosseum.addGladiator(jack)
  // console.log(colosseum.gladiators.length)
