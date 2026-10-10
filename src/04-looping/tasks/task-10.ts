/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */
const submissions = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 }
];

const PASSING_SCORE = 75;

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let reviseCount = 0;
let totalScore = 0;

const notSubmittedNames: string[] = [];
const reviseNames: string[] = [];

for (const item of submissions) {
  if (item.submitted) {
    submittedCount++;

    if (item.score >= PASSING_SCORE) {
      passedCount++;
    } else {
      reviseCount++;
      reviseNames.push(item.student);
    }
  } else {
    notSubmittedCount++;
    notSubmittedNames.push(item.student);
  }

  totalScore += item.score;
}

const average = totalScore / submissions.length;

console.log("Submitted:", submittedCount);
console.log("Not submitted:", notSubmittedCount);
console.log("Passed:", passedCount);
console.log("Must revise:", reviseCount);
console.log("Not submitted names:", notSubmittedNames.join(", "));
console.log("Revise names:", reviseNames.join(", "));
console.log("Class average:", average.toFixed(2));