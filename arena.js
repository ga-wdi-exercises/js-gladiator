



class Arena{
  constructor(name, gladiators){
    this.name = name.toLowerCase().replace(/\b[a-z]/g, function(letter){
    return letter.toUpperCase();
  })
}
var colosseum = new Arena("megalopolis")
var colosseum = new Arena("colosseum")


// couldnt get the function to capitalize the first letter and couldn't find a way around it.  I worked with Chris and we were both stumped by it.
