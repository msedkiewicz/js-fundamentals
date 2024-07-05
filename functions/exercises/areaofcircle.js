const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

circle.radius = 3;

console.log(circle.area);

circle.area = 20; // test if we can set area?
console.log(circle.area);
