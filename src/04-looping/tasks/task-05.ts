/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldTotal = 0;
let silverTotal = 0;
let bronzeTotal = 0;
let noMedalTotal = 0;
let averageScore = 0;
let totalScore = 0;

for (const score of scores) {

    if (score >= 95) {
        goldTotal++;
    } else if (score >= 85) {
        silverTotal++;
    } else if (score >= 75) {
        bronzeTotal++;
    } else {
        noMedalTotal++;
    }

    totalScore += score;
}

averageScore = totalScore / scores.length;

console.log(`Number of Gold Medal Winners: ${goldTotal}`);
console.log(`Number of Silver Medal Winners: ${silverTotal}`);
console.log(`Number of Bronze Medal Winners: ${bronzeTotal}`);
console.log(`Number of Students Without Medals: ${noMedalTotal}`);
console.log(`Average Competition Score: ${averageScore}`);