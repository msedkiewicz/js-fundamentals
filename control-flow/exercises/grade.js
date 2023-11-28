// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const studentsMarks1 = [50, 40, 50];
const studentsMarks2 = [60, 68, 65];
const studentsMarks3 = [80, 80, 50];
const studentsMarks4 = [80, 80, 95];
const studentsMarks5 = [95, 95, 100];

function calculateAverage(array) {
  let sum = 0;

  for (const value of array) {
    sum += value;
  }

  return sum / array.length;
}

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

console.log(calculateGrade(studentsMarks1));
console.log(calculateGrade(studentsMarks2));
console.log(calculateGrade(studentsMarks3));
console.log(calculateGrade(studentsMarks4));
console.log(calculateGrade(studentsMarks5));
