var color = "red"; // global variable attached to window object in browser
//bad - risk of overriding variables

let age = 30;

console.log(window.color);
console.log(window.age);

function sayHi() {
  console.log("hi!");
}
console.log(window.sayHi);
window.sayHi();
