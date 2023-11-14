let name = 'Lena';
console.log(name);

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

console.log(typeof(age));
age = true;
console.log(typeof(age));
age = 30.1; // JS has just number type - no floats, integers etc
console.log(typeof(age));

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
// Array
// Function

console.log(person);