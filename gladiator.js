class Gladiator {
  constructor(name, weapon){
    if (weapon == 'Trident' || weapon == 'Spear' || weapon == 'Club'){
    this.name = name
    this.weapon = weapon
    }
    else{
      throw new Error(['Not a wise weapon of choice. Choose one from the list.'])
    }
  }
}


let eva = new Gladiator ('eva', 'Spear')
