class Arena{
	constructor(arenaName){
		this.arenaName = arenaName;
		this.name = []
		this.weapon = []
	}
		addGladiator (gladiator) {
			this.name.push(gladiator);
				// console.log(colosseum.name[2])
			
				if (this.name.length > 2) 
					this.name.pop()
			}
			addWeapon (gladiator){
				this.weapon.push(gladiator)
				console.log(this.weapon)
			}
				
		//attempting at creating a fight method that will cal the outcomes with
		//return representing who would win. 
		fight(){
			this.weapon
			if (this.weapon.glad1 > this.weapon.glad3){
				return "WINNER!"
			} else if (this.weapon.glad1 < this.weapon.glad2){
				return "LOSER!!!"
			} else if (this.weapon.glad2 > this.weapon.glad1){
				return "WINNER!"
			} else if (this.weapon.glad2 < this.weapon.glad3){
				return "LOSER!!!"
			} else if (this.weapon.glad3 > this.weapon.glad1){
				return "WINNER!"
			} else if (this.weapon.glad3 < this.weapon.glad2){
				return "LOSER!!!"
			}
		}
	}
	
				const colosseum = new Arena("WDI-16");
				console.log(colosseum.arenaName)
				colosseum.addGladiator(glad1)
				colosseum.addWeapon(glad1)
				console.log(colosseum.name[0])
				colosseum.addGladiator(glad2)
				colosseum.addWeapon(glad2)
				console.log(colosseum.name[1])
				colosseum.addGladiator(glad3)
				colosseum.addWeapon(glad3)
				// console.log(colosseum.gladiator.length)
