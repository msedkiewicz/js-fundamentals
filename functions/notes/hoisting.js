//Function declaration
walk(); //works -> hoisting
// hoisting - process of moving function declaration to the top of the file!

function walk() {
  console.log("walk");
}

// Function expression
run(); // does not work
const run = function () {
  console.log("run");
};

console.log(x); // does not work
let x = 1;
