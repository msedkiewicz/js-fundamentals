// Primitives vs objects

let x = 10;
let y = x;

x = 20;
console.log(y); // 10
console.log(x); // 20

// with primitives values are independent of each other

let a = {
  value: 10,
};
let b = a;
a.value = 20;

console.log(a); // { value: 20 }
console.log(b); // { value: 20 }

// reference is same for a and b. So both objects have same reference, so can be changed in the same moment (they share space in memory)
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); // 10, number++ is different from number

let obj = { value: 10 };
function increase2(obj) {
  obj.value++;
}
increase2(obj);
console.log(obj); // value:11
