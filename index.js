// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const studentsMarks1 = [50, 40, 50];
const studentsMarks2 = [60, 68, 65];
const studentsMarks3 = [80, 80, 50];
const studentsMarks4 = [80, 80, 95];
const studentsMarks5 = [95, 95, 100];

function calculateGrade(marks) {
  let sumOfMarks = 0;

  for(const mark of marks) {
    sumOfMarks += mark;
  }

  const average = sumOfMarks / marks.length;

  if (average <= 59) {
    console.log('F');
  } else if (average > 59 && average <= 69) {
    console.log('D');
  } else if (average > 69 && average <= 79) {
    console.log('C');
  } else if (average > 79 && average <= 89) {
    console.log('B');
  } else if (average > 89 && average <= 100) {
    console.log('A');
  }
}

calculateGrade(studentsMarks1);
calculateGrade(studentsMarks2);
calculateGrade(studentsMarks3);
calculateGrade(studentsMarks4);
calculateGrade(studentsMarks5);
