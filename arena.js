class Arena{
  constructor(name, gladiator){
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiator = gladiator
  }


addGladiator(name){
  if (this.gladiator.length < 2){
    this.gladiator.push(name);
  }
  else (alert("Too many fighters, max 2"))
}
fight(){
  if (gladiator.length === 2){

    let fighterone = this.gladiator[0]
    let fighertwo = this.gladiator[1]

    if (fighterone.weapon === "trident" && fightertwo.weapon === "spear"){
      this.gladiator.splice(1)
    }

    else if (fighterone.weapon === "spear" && fightertwo.weapon === "club"){
      this.gladiator.splice(1)
    }

    else if (fighterone.weapon === "club" && fightertwo.weapon === "trident"){
      this.gladiator.splice(1)
    }

    else if (fightertwo.weapon === "trident" && fighterone.weapon == "spear"){
      this.gladiator.splice(0)
    }

    else if (fightertwo.weapon === "spear" && fighterone.weapon === "club"){
      this.gladiator.splice(0)
    }

    else if (fightertwo.weapon === "club" && fighterone.weapon === "trident"){
      this.gladiator.splice(0)
    }

}
}

}
