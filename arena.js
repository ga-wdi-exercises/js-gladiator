class Arena {
   constructor(name,gladiators){
     this.name =  name.charAt(0).toUpperCase() + name.slice(1);
     this.gladiator = []
   }
   class Gladiator {
       constructor (name, weapon ){
       this.name = name;
       this.weapon = weapon;
     }

   }
 addGladiator(name){
   if (this.gladiators.length < 2){
     this.gladiators.push(name);
   }else{
     alert("enough fighters in the Arena");
   }
 }
 fight(){
   if(this.gladiators.length == 2){
     let fightOne = this.gladiators[0].weapon
     let fightTwo = this.gladiators[1].weapon
         if ( fightone == Trident){
           this.gladiators.pull(name);
         }
   } else{
     this.gladiators.pull(name);

   }
 }


}
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")

 var colosseum = new Arena("colosseum")
 console.log(colosseum.name);
 console.log(colosseum.Gladiator);


 var colosseum = new Arena("megalopolis");




colosseum.addGladiator(max)
console.log(colosseum.gladiators)
var max = new Gladiator("Maximus","Trident")
