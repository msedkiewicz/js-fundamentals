function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); //nope
}
console.log(i); //nope

start();

// var -limited not to block scope but to function scope

function varStart() {
  for (var j = 0; j < 5; j++) {
    console.log(j);
  }
  console.log(j); // available - gives 5
}
console.log(j); // nope

varStart();

function varColor() {
  for (var j = 0; j < 5; j++) {
    if (true) {
      var color = "blue";
    }
  }
  console.log(color); // with let it won't work
}
