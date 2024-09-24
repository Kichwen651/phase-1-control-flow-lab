function scuberGreetingForFeet(feet) {
  let text; 

  if (feet <= 400) {
    text = "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    text = "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    text = "I will gladly take your thirty bucks.";
  } else {
    text = "No can do.";
  }

  return text; }

console.log(scuberGreetingForFeet(300));   
console.log(scuberGreetingForFeet(1500));  
console.log(scuberGreetingForFeet(2200));  
console.log(scuberGreetingForFeet(2600));  



function ternaryCheckCity(city){
  // Write your code here!
return city === "NYC" ? "Ok, sounds good.": "No go.";
} 
console.log( ternaryCheckCity("NYC"))
console.log( ternaryCheckCity("Carlifornia"))



function switchOnCharmFromTip(tip) {
  // Write your code here!
switch (tip)  {
  case 'generous':
            return "Thank you so much.";
        case 'not as generous':
            return "Thank you.";
        default:
            return "Bye.";
}

} console.log(switchOnCharmFromTip("generous"))
console.log (switchOnCharmFromTip("not as generous"))
console.log(switchOnCharmFromTip("Bye."))
