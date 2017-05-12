class Gladiator {
	constructor(name,weapon){
		this.name = name
		this.weapon = weapon
		this.weaponsCheck(weapon)
	}
	weaponsCheck(weapon){
		const possibleWeapons = ["Spear","Club","Trident"]
		if (possibleWeapons.includes(weapon)) {
			this.weapon = weapon
			return
		}else{
			this.weapon = "Club"
			alert("Error! not a valid weapon \n you've been given a Club")
		}
	}
}
const max = new Gladiator("Maximus","Spear")
const comi = new Gladiator("Commidus" , "Club")
//   arry.includes(input)
