/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function totalStudents(submissions: any[]): number {
    return submissions.length;
}

function countSubmittedAssignments(submissions: any[]): number {
    let count = 0;
    for (const submission of submissions) {
        if (submission.submitted) {
            count++;
        }
    }
    return count;
}

function countMissingAssignments(submissions: any[]): number {
    let count = 0;
    for (const submission of submissions) {
        if (!submission.submitted) {
            count++;
        }
    }
    return count;
}

function countPassedStudents(submissions: any[]): number {
    let count = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score >= 75) {
            count++;
        }
    }
    return count;
}

function countStudentsRequireRevision(submissions: any[]): number{
    let count = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score < 75) {
            count++;
        }
    }
    return count;
}

function averageScore(submissions: any[]): number {
    let totalScore = 0;
    let submittedCount = 0;
    for (const submission of submissions) {
        if (submission.submitted) {
            totalScore += submission.score;
            submittedCount++;
        }
    }
    return submittedCount > 0 ? totalScore / submittedCount : 0;
}

function highestScore(submissions: any[]): number {
    let highest = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score > highest) {
            highest = submission.score;
        }
    }
    return highest;
}

function lowestScore(submissions: any[]): number {
    const submittedScores = submissions
        .filter(submission => submission.submitted)
        .map(submission => submission.score);

    if (submittedScores.length === 0) {
        return 0;
    }

    return Math.min(...submittedScores);
}

function printReport(submissions: any[]): void {
    console.log("Total Students: " + totalStudents(submissions));
    console.log("Submitted Assignments: " + countSubmittedAssignments(submissions));
    console.log("Missing Assignments: " + countMissingAssignments(submissions));
    console.log("Passed Students: " + countPassedStudents(submissions));
    console.log("Students Requiring Revision: " + countStudentsRequireRevision(submissions));
    console.log("Average Score: " + averageScore(submissions).toFixed(2));
    console.log("Highest Score: " + highestScore(submissions));
    console.log("Lowest Score: " + lowestScore(submissions));
}

printReport(submissions);