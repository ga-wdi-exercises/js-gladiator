class Gladiator{
constructor(name,weapon){
  this.name=name;
  this.weapon=weapon;
  if (weapon == "Spear"|| weapon =="Club" || weapon =="Trident"){
    console.log(name+" has powerful "+weapon+".")
  }
  else{

    console.log("You entered invalid weapon, please enter Spear, Club or Trident")
  }
}

}
