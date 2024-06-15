const courses = [
  { id: 1, name: "Math" },
  { id: 2, name: "Literature" },
  { id: 3, name: "PE" },
  { id: 4, name: "Chemistry" },
];

console.log(courses.includes({ id: 1, name: "Math" })); // false
const course = courses.find((course) => course.name === "PE");

console.log(course);

const courseIndex = courses.findIndex(
  (courseIndex) => courseIndex.name === "PE"
);

console.log(courseIndex);
