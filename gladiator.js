class Gladiator {
  constructor (name, weapon){
    this.name = name;
    this.weapon = if('spear' || 'trident' || 'club' == weapon.toLowerCase(){
      return weapon
    }
    else{
      alert('Not a valid weapon')
    }
  }
}

const mark = new Gladiator('Mark', 'Trident')
const mike = new Gladiator('Mike', 'Spear')
const nick = new Gladiator('Nick', 'Club')
const geo = new Gladiator('Geo', 'Trident')
