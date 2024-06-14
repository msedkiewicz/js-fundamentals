// Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Math.random();

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(2, 5);

Math.round(1.9);

Math.max(3, 5, 8, 14, 200, 4);
Math.min(3, 5, 8, 14, 200, 4);

//String
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//string primitive
const message = "Hi!";

//string object
const another = new String("hi");

typeof message;
typeof another;

const message2 = "Hello World! Nice to see you!";
message2.length;
message2[6];
message2.includes("hello");
message2.includes("Hello");
message2.startsWith("Hello");
message2.endsWith("World");
message2.indexOf("Nice");
message2.replace("Nice", "Good");
console.log(message2);
message2.toUpperCase();
message2.toLowerCase();

const message3 = "    Hello World!   ";
message3.trim();
message3.trimLeft();

// escape notation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape

const message4 = " ' Hello \n World!";
message4.split(" ");
// Object literals - {}, Boolean literals - true, false, String literals '', ""
//Template literals - ``
const newmessage = `This is
the end.
Hold your breath
and count to ten...`;

const name = "John";
const mailing = `Hi ${name}!

It's nice to have you here! Give a high ${2 + 3}!`;
