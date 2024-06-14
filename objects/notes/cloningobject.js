const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another = {};

for (let key in circle) {
  another[key] = circle[key];
  another["radius"] = circle["radius"];
}

console.log(another);

// modern JS
const circle2 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another2 = Object.assign({}, circle);

console.log(another2);

// with another property
const circle3 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another3 = Object.assign({ color: "blue" }, circle);

console.log(another3);

//spread operator

const another4 = { ...circle };
console.log(another4);

//Garbage collector - finds unused variables, cleans them and allocates used memory beneath the hood
