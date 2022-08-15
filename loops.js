//older way of doing loops
const amounts = [61.00, 54.25, 112.99, 5.00];

/*
let total = 0;
for (let i = 0; i <amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);
*/

// newer way of doing loops

let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is ', total);


