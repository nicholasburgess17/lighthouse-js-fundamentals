/*const sayHello = function () {
  console.log("Hello, World");
}

sayHello();
*/
const sayHello = function (name) {

console.log("Hello, " + name + "!");
}

sayHello("Glenn");
sayHello("Olivia");
sayHello("Krystal");
sayHello("Nicholas");


const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John')

const returnSayHello = function (name) {
  return "Hello, " + name + "!";
}
const greeting = returnSayHello("Johnathan");

console.log(greeting);