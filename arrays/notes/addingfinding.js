const numbersone = [3, 4];

// Add element to end
numbersone.push(5, 6);
console.log(numbersone);

// Add element to beginnig
numbersone.unshift(1, 2);

// Add element to middle
numbersone.splice(2, 0, "a", "b");

// Finding elements in an array
const numberstwo = [1, 2, 3, 1, 4];

console.log(numberstwo.indexOf("a"));
console.log(numberstwo.indexOf("1"));
console.log(numberstwo.indexOf(1));
console.log(numberstwo.lastIndexOf(1));

console.log(numberstwo.indexOf(1) !== -1);
console.log(numberstwo.includes(1));
console.log(numberstwo.indexOf(1, 2)); // second parameter - from which index we start

const courses = [
  { id: 1, name: "Math" },
  { id: 2, name: "Literature" },
  { id: 3, name: "PE" },
  { id: 4, name: "Chemistry" },
];

console.log(courses.includes({ id: 1, name: "Math" })); // false
const course = courses.find(function (course) {
  return course.name === "PE";
});

console.log(course);

const courseIndex = courses.findIndex(function (courseIndex) {
  return courseIndex.name === "PE";
});

console.log(courseIndex);
