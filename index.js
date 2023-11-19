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

// console.log(x + y); // expression - something that produces a value
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y); // modulo
// console.log(x ** y); // exponentiation - x to y power

// Increment (++)
// console.log(x); // 10
// console.log(++x); // 11
// 2nd approach
// console.log(x++); // 10
// console.log(x); // 11

// Decrement
// console.log(--x); // 9

// Assignment Operators

let a = 3; // simple assignment operator
a++; // increment operator, equivalent to a = a + 1;
a += 5; // addition assignment operator. a = a + 5;
x *= 3 // x = x * 3; multiplication assignment operator

// Comparison operators

// Relational operators - returns Boolean
// console.log(a > 0); // returns true
// console.log(a >= 9); // for a = 9 returns true
// console.log(a < 0); // false
// console.log(a <= 9); // true

// // Equality operators
// console.log(a === 9); // true
// console.log(a !== 9); // false

// Strict equality operator (type + value)
// console.log(a === 9); // true
// console.log(a === '9'); // false
// // Lose equality operator (value)
// console.log(a == 9); // true
// console.log(a == '9'); // true
// console.log(true == 1); // true

// Ternary operators (conditional operators)
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// Logical operators with non-booleans

// // Logical AND (&&) - returns TRUE if both operands are TRUE
// console.log(true && true); // true
// console.log(true && false); // false

// // Logical OR (||) - returns TRUE if one of operators is TRUE
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false) // false

// // NOT (!)
// // console.log(!true); // false

// console.log(false || true); // true
// console.log(false || 'Lena'); // Lena
// console.log(false || 1 ); // 1

// // If operand is not a boolean true or false, it interprets result as truthy or falsy
// // Falsy values => undefined, null, 0, false, '', NaN
// // Anything not Falsy => Truthy

// console.log(false || 1 || 2) // 1 - as soon as truthy value is found it's returned - short-circuiting

// let userColor = 'red'; // if userColor = undefined; currentColor = blue
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor); // red

// Precedence of operators

console.log(2 + 3 * 4); // 14

// use parentheses to determine order if needed
console.log((2 + 3) * 4); // 20
