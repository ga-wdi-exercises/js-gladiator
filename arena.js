class Arena {
	constructor(name, gladiators){
		//toUpperCase will make every letter a capital, so we have to target just the first letter, then add on the rest
		this.name = name.charAt(0).toUpperCase() + name.slice(1);
		this.gladiators = [];
	}
	addGladiator(Gladiator){
		if (this.gladiators.length < 2){
			this.gladiators.push(Gladiator);
		}
	}
	fight(){
		if (this.gladiators.length = 2){



			if (colosseum.gladiators[0].weapon == "Trident" && colosseum.gladiators[1].weapon == "Spear" ){
				alert ("trident beats spear so first guy wins");
			} else if (colosseum.gladiators[0].weapon == "Trident" && colosseum.gladiators[1].weapon == "Club" ){
				alert ("club beats trident so second guy wins");






			} else if (colosseum.gladiators[0].weapon == "Spear" && colosseum.gladiators[1].weapon == "Club"){
		
				alert ("spear beats club so first guy wins");
			} else if (colosseum.gladiators[0].weapon == "Spear" && colosseum.gladiators[1].weapon == "Trident"){
				alert ("trident beats spear so second guy wins");
			


			} else if (colosseum.gladiators[0].weapon == "Club" && colosseum.gladiators[1].weapon == "Trident"){
			
				alert ("club beats trident so first guy wins");
			} else if (colosseum.gladiators[0].weapon == "Club" && colosseum.gladiators[1].weapon == "Spear") {
				alert ("spear beats club so second guy wins");
			}




		}
	}
}