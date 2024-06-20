const numbers = [1, 2, 3];
const joined = numbers.join("@");
console.log(joined);

const separated = joined.split("@");
console.log(separated);

//creating url
const message = "First post on Denmark England football match";
const parts = message.split(" ");
console.log(parts);

const url = parts.join("-").toLowerCase();
console.log(url);
