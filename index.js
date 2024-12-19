//create an object

const fruits = {
  name: "bannana",
  isInStock: true,
}

// console.log(fruits);

const shoe = {
  brand: "Converse",
  hasLaces: true,
  hasVelcro: false,
  color: ["green", "white"],
  price: 60,
  activityType: "active",
}
//return the value of is in stock
// console.log(fruits.isInStock)


const name1 = "isInStock";

//add a key:value pair to object

shoe.lacesColor = "white"

//updating a key:value pair

fruits.name = "strawberry"

console.log(fruits)

//delete

delete fruits.isInStock

//object looping

for(const key in fruits){
  //reutrn all the keys
  console.log(key)
  
  //return all the values
  console.log(fruits[key])
}

console.log(Object.keys(shoe))

console.log(Object.values(shoe))

const objKeys = Object.keys(fruits)
objKeys.push("title")
console.log(objKeys)


//JSON


//stringify

const stringify = JSON.stringify(shoe)
console.log(stringify)

//parse
const parse = JSON.parse(stringify)
console.log(parse)