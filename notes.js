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

circle.draw(); // Method
