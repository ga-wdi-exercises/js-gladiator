console.log('arena linked')
class Arena {
  constructor (name, gladiator) {
  this.name = name.charAt(0).toUpperCase() + name.slice(1)
  this.gladiators = []
 }
 addGladiator (gladiator) {
   if (this.gladiators.length < 2) {
     this.gladiators.push(gladiator)
   }
   else {
     return 'error too many fighters in arena'
   }
 }
 fight () {
   let weapon1 = this.gladiators[0].weapon
   let weapon2 = this.gladiators[1].weapon
   if (weapon1 === weapon2) {
     this.gladiators = []
   } else if (weapon1 === 'Trident' && weapon2 === 'Spear') {
     this.gladiators.pop()
   } else if (weapon1 === 'Trident' && weapon2 === 'Club') {
     this.gladiators.shift()
   } else if (weapon1 === 'Spear' && weapon2 === 'Trident') {
     this.gladiators.shift()
   } else if (weapon1 === 'Spear' && weapon2 === 'Club') {
     this.gladiators.pop()
   } else if (weapon1 === 'Club' && weapon2 === 'Trident') {
    this.gladiators.pop()
  } else if (weapon1 === 'Club' && weapon2 === 'Spear') {
    this.gladiators.push()
  }
   }
 }
}
