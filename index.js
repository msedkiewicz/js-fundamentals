//Conditional statements
// if... else
let hour = 10;

if (hour < 6) console.log("You should be sleeping!");
else if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");

// switch... case

let role = "moderator";

switch (role) {
  case "guest":
    console.log("User: Guest");
    break;
  case "moderator":
    console.log("User: Moderator");
    break;

  default:
    console.log("User: Role unknown");
}

if (role === "guest") console.log("User: Guest");
else if (role === "moderator") console.log("User: Moderator");
else console.log("User: Role unknown");

// Loops
for (let i = 0; i < 5; i++) {
  console.log(`${i}. Hello World!`);
}

for (let i = 1; i <= 5; i++) {
  console.log(`${i}. Hello From Another World!`);
}

// option for odd numbers
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(`${i}. Hello From Odd Number!`);
  }
}

// fun with even numbers
for (let i = 8; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(`${i}. Hello From Even Number!`);
  }
}

// While loop
i = 0;
while (i <= 5) {
  if (i % 2 === 0) {
    console.log(`${i}. Still learning JS!`);
  }
  i++; // VERY IMPORTANT!!!!!!!!!! AND IN THIS PLACE, not in if statement...
}
// Do... while loop - always executed, at least once, even if condition evaluates to false
let a = 0;
do {
  console.log(`${a}. Fighting to learn JS!`);
  a++;
} while (a <= 3);

// Infinite loop
// let i = 0;
// while (i < 5) {
//     console.log('something');
// }

// while(true) {
//     something...
// }

// for (let i = 0; i > 0; i++) {
//     something...
// }

// For...in loop
const person = {
  // object
  name: "Lena",
  favNumber: 7,
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ['red', 'blue', 'grey']; // for... in loop for Arrays. Not handy but possible...

for (let index in colors) {
    console.log(index, colors[index]);
}