// function isBiggerThan10(element, index, array) {
//   return element > 10;
// }
//
// [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
// [12, 5, 8, 1, 4].some(isBiggerThan10); // true
let weapons = ['bulbasaur', 'squirtle', 'charmander']
class Gladiator {
  constructor(name, weapon) {
    // if ((weapon === 'bulbasaur') || (weapon === 'charmander') || (weapon === 'squirtle')){
    // if index = contains.call(weapons, weapon){
    if (weapons.indexOf(weapon) === -1){
      throw `Don't use that!`
    }
      this.name = name
      this.weapon = weapon
    // } else {
    //   console.log("Don't use that!")
    // }
  }
}

var agron = new Gladiator('Agron', 'charmander')
var crixus = new Gladiator('Crixus', 'bulbasaur')
// var nasir = new Gladiator('Nasir', 'pikachu')

console.log(agron)
console.log(crixus)
console.log(nasir)
