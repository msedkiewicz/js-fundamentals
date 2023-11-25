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
