// var myArray = [0,1,2],
//     needle = 1,
//     index = contains.call(myArray, needle); // true
// let weapons = ['bulbasaur', 'squirtle', 'charmander']
class Gladiator {
  constructor(name, weapon) {
    // if ((weapon === 'bulbasaur') || (weapon === 'charmander') || (weapon === 'squirtle')){
    // if index = contains.call(weapons, weapon){
      this.name = name
      this.weapon = weapon
    // } else {
    //   console.log("Don't use that!")
    // }
  }
}

var agron = new Gladiator('Agron', 'charmander')
var crixus = new Gladiator('Crixus', 'bulbasaur')
var nasir = new Gladiator('Nasir', 'pikachu')

console.log(agron)
console.log(crixus)
console.log(nasir)
