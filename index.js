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