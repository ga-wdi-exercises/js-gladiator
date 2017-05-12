// Solution #1
class Gladiator {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
}

let max = new Gladiator('Maximus','Trident');
let titus = new Gladiator('Titus','Spear');
let marcos = new Gladiator('Marcus','Club');
let andronicus = new Gladiator('Andronicus','Sword');

//Solution #2 - You can't choose the name of the weapon in an instant
// class Gladiator {
//   constructor(name){
//     this.name = name;
//     this.weapon = 'Trident';
//   }
// }
//
// let max = new Gladiator('Maximus','Trident');
// let titus = new Gladiator('Titus','Spear');
// let marcos = new Gladiator('Marcus','Club');
// let andronicus = new Gladiator('Andronicus','Sword');

//Solution #3 - You can't edit the properties or the values of gladiator max
//   class Gladiator {
//     constructor(name, weapon){
//       this.name = name;
//       this.weapon = weapon;
//     }
//   }
//
// let max = new Gladiator('Maximus','Trident');
// Object.freeze(max);
