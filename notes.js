// Object

// let radius = 1;
// let x = 1;
// let y = 1;

// function draw() {}
// function move() {}

// Better approach: OOP - object oriented programming

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
  move: function () {
    console.log("move");
  },
};

// circle.draw(); // Method

// Factory function
function createCircle(radius) {
  // camelCase notation / camel notation
  return {
    radius,
    draw() {
      console.log("draw factory function");
    },
  };
}

const circle1 = createCircle(1);
// console.log(circle1);
// circle1.draw();
// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor function

function Circle(radius) {
  // classes start with big letter :P
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);

const circle4 = {
  radius: 1,
};

circle4.color = "blue";
circle4.draw = function () {};
// console.log(circle4);

delete circle4.draw;
// console.log(circle4);

const another = new Circle(1);
// console.log(another.constructor);
// console.log(circle1.constructor);

// let x = {};
// let x = new Object();
// new String(); or '' or "" or ``
// new Boolean(); => true / false
// new Number(); => 1, 2, 3, ...

// functions are objects
const Square = new Function(
  "length",
  `
this.length = length;
this.draw = function() {
  console.log("draw");
}
`
);

// Circle.call({}, 1)
// Circle.call(window, 1)
// Circle.apply({}, [1, 2, 3])

const square = new Square(2);
console.log(square);
