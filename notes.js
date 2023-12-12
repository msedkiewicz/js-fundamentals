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

// const circle1 = createCircle(1);
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
