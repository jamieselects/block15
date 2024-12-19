// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
// When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
// In this case, they will be able to observe that 
// they have ordered three vanilla, two coffee, and one strawberry froyo.


//prompt the user to enter flavors
let flavorEntry = prompt(
  "Please enter your flavors below",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
console.log(flavorEntry);

//split the string of flavors into an array of strings
let flavorArray = flavorEntry.split(",");

//create an object for the order
const order = {};

for (let i = 0; i < flavorArray.length; i++) {
  const key = flavorArray[i];


    if (order[key] !== undefined) {
      order[key] = order[key] + 1;
    } else {
      order[key] = 1;
    }
  }

console.log(order);