const raining = 1;
const temperature = -120;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (temperature < 5) {
  console.log("Make sure you pick out a scarf!");
}
else if (temperature <15) {
  console.log("Short sleeves won't cut it!");
}
else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

//Logical Opperators

const isCitizen = true;
const age = 28;
if (isCitizen && age > 18) {
  console.log("You are eligble to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea");
}

if (!raining) {
  console.log("Leave your umbrella at home!");

}
//WhichSchool

const whichSchool = function (age) {
  if (age <= 13) {
    console.log("Elementary school")
  }
  else if (age > 13 && age < 18) {
    console.log("Secondary school")
  }
  else (age > 18) {
    console.log("Lighthouse Labs")
  }
}
let age ="";
function whichSchool(age) {
  if (age < 13) {
    return "Elemtantary School.";
  }
  else if (age <= 18) {
    return "Secondary School.";
  }
  else (age > 18) {
    return "Lighthouse Labs.";
  }
}
const whichSchool = function (age) {
  if (age < 13) {
    return "Elemtantary School.";
  }
  else if (age <= 18) {
    return "Secondary School.";
  }
  else (age > 18) {
    return "Lighthouse Labs.";
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

//Final 
const whichSchool  = function (age) {
  if (age < 13) {
    return "Elementary School";
  }
  else if (age <= 18) {
    return "Secondary School";
  }
  else {
    return "Lighthouse Labs";
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

// JuliaJames Udacity loops
var x = 1;

while ( x <= 20 ) {
    if (x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    } else if (x % 5 === 0){
        console.log ("James");
    } else if (x % 3 === 0) {
    console.log("Julia");
    }
    else {
        console.log(x)
    }
    x = x + 1 ;    
    
}
