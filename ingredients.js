const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("These are the ingredients I will need to bake my banana bread");
let j = 0;
while ( j < ingredients.length) {
  console.log(ingredients[j])
  j++;
}
// Write a for loop that prints out the contents of ingredients:

console.log("These are the ingredients I will need to bake my banana bread");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("These are the ingredients I will need to bake my banana bread but backwards");

let b = 7;
while ( b > 0) {
  console.log(ingredients[b])
  b--;
}
