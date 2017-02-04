class Arena {
   constructor(name){
     this.name =  name.charAt(0).toUpperCase() + name.slice(1);
     this.gladiators = []
   }
 addGladiators(name){
   if (this.gladiators.length < 2){
     this.gladiators.push(name);
   }else{
     alert("enough fighters in the Arena");
   }
 }
 fight(){
   if(this.gladiators.length == 2){
     let fighterOne = this.gladiators[0].weapon
     let fighterTwo = this.gladiators[1].weapon
     if ( fighterOne == "Trident" && fighterTwo == "Spear"){
       this.gladiators.pop();
     } else if ( fighterOne == "Spear" && fighterTwo == "Sword"){
       this.gladiators.pop();

     } else if (fighterOne == "Sword" && fighterTwo == "Trident"){
       this.gladiators.pop();
     }else if( fighterOne == "Spear" && fighterTwo == "Trident" ){
       this.gladiators.pop();
     }else if( fighterOne == "Sword" && fighterTwo == "Spear"){
       this.gladiators.pop();
     }else if (fighterOne == "Sword" && fighterTwo == "Trident"){
       this.gladiators.pop();
     }
     else{
       console.log("No one dies on my watch");
     }
 }


}

}
var colosseum = new Arena('Colosseum');
 console.log(colosseum.name);

 //first trying with just two fighters and checking if we don't get an alert
colosseum.addGladiators(max);
colosseum.addGladiators(titus);

//Adding the third fighter to see for an alert

colosseum.addGladiators(andronicus);

 console.log(colosseum.gladiators);
