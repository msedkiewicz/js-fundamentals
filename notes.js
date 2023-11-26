// Conditional statements
// if...else

if (condition) {
  statement;
} else if (!condition) {
  anotherStatement;
} else {
  somethingGeneric;
}

// switch... case

switch (variable) {
  case "one":
    somethingHappens;
    break;
  case "two":
    anotherSomethingHappens;
    break;
  default:
    somethingGeneric;
}

// Loops
// For loops
// initialExpression - for initializing variable; let i = 0 -> loop variable; condition - loop will run until condition is true; incrementExpression - for incrementing or decrementing value
for (initialExpression; condition; incrementExpression) {
  somethingHappens;
}
// While loops - declare variable before loop; condition - e.g. i > 5;
let i = 0;
while(condition) {
  statement;
  incrementing;
}
// Do... while loops
do {
  statement;
  incrementing;
} while(condition);

// Infinite loops - name is enough descriptive...

// For... in loops - for objects

const person = { // object
  name: 'Lena',
  favNumber: 7
}

for (let key in person) {
  somethingHappens;
}

// Dot notation - person.name; bracket notation- person['name']
// For... of loops

