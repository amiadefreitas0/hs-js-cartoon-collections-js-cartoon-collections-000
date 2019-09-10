///Create an  array for the dwarves
//create a string that numbers an array
var dwarves = ["Dopey", "Bashful","Grumpy"];

function dwarfRollCall(dwarves) {
  return("1. "+ dwarves[0] + " 2. " + dwarves[1] + " 3. "+ dwarves[2] + " ");
}
//passed

//element to uppercase and add an exclamation point at the end
///for loop - use the same code over and over again, each time with a different value.
// var is similar to let
//let is inside a block scope not outside
//var is anywhere outside
function summonCaptainPlanet(planeteerCalls){
  //create a for loop
  let PlaneteerCalls = ["earth", "wind", "fire", "water"];
  var emptyArray = []
	    for (var i = 0; i < planeteerCalls.length; i++) {
	      emptyArray.push(`${planeteerCalls[i].toUpperCase() + '!'}`);
	    }
	         return(emptyArray);
	}

///The function should tell us if any of the calls are longer than four characters.
// this has to be true or false
//for loop so that 
function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return(true);
    }
    return (false);
  }
}
 
 //function find the cheese should be able to find the cheese
function findTheCheese (foods) {
  var foods = ["tomato soup", "cheddar", "oyster crackers", "gouda"]
  
let cheese = ["cheddar", "gouda", "camembert"]

for (let i = 0; i < foods.length; i++)
{
  for (let b = 0; b < cheese.length; b++) {
    if (foods[i] === cheese[b]){
      return(foods[i]);
    }
  }
}
return ("no cheese!");
}

dwarfRollCall(dwarves);
summonCaptainPlanet(planeteerCalls);
longPlaneteerCalls(assortedWords);

findTheCheese(soup);



