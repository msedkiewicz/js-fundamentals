let name = 'Lena';
// console.log(name);

// Cannot be a reserved keyword
// Should be meaningful and descriptive
// Cannot start with a number
// Cannot contain a space or hyphen (-) - use Camel notation instead
// Are case-sensitive

// Initializing
let manchesterUnited, manchesterCity;
let astonVilla = 'Unai Emery', arsenal = 'Mikel Arteta';

// Best practice for initializing
let chelsea = 'Mauricio Pochettino';
let newcastleUnited = 'Eddie Howe';
let year = '2023';

// if there is no need to reassign value - use const; otherwise, use let
const myName = 'Lena';
let group = 'Gryffindor';

// Primitives / Value Types
let nickname = 'Snakebite'; // String Literal
let age = 21; // Number Literal
let isApproved = true; // Boolean Literal
let firstName; // undefined
let lastName = null; // for clearing the value of variable

// Static (statically-typed) - type of variable is set and cannot be changed (i.e. TypeScript)
// Dynamic (dynamically-typed) - type of variable can be changed during run time

// console.log(typeof(age));
age = true;
// console.log(typeof(age));
age = 30.1; // JS has just number type - no floats, integers etc
// console.log(typeof(age));

// Reference Types
const person = {
    name: 'Lena',
    age: 25
}; // Object Literal

    // Accessing object properties
    person.name = 'John'; // Dot notation
    person['age'] = 34; //Bracket notation

    let selection = 'age';
    person[selection] = 56;
    //console.log(person);

// Array
 let rblGoals = []; // initialize empty Array Literal
 let selectedColors = ['red', 'blue', 'violet'];
 selectedColors[3] = 'green';
 selectedColors[4] = true; // Array is not narrowed in JS to one type of data...
//  console.log(selectedColors);
//  console.log(selectedColors[4]);
//  console.log(typeof(selectedColors));
//  console.log(selectedColors.length);

// Function

// Performing a task
function greet(name) { // parameter
    console.log(`Hello ${name}!`); // body function
}
// greet('Lena'); // argument
// greet('Bartek');

function bye(name, lastName) {
    console.log(`Good night, sweet ${name} from ${lastName} House!`)
}

// bye('Lena', 'Lanister');

// Calculating a value

function square(number) {
    return number * number;
}

// console.log(square(4)); // cosnole.log is also a function call :P

let squareRoot = square(27);
// console.log(squareRoot);

// Arithmetic operators - counting

let x = 10;
let y = 11;

console.log(x + y); // expression - something that produces a value
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // modulo
console.log(x ** y); // exponentiation - x to y power