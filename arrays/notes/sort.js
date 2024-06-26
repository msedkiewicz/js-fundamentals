const numbers = [1, 2, 3, 7, 4, 6, 5, 9, 8];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// Sorting objects

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
  { id: 3, name: "C++" }, // big / small letters make huuuge difference in sorting
];

courses.forEach((course) => {
  course.name = course.name.toUpperCase();
});

courses.sort(function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(courses);
