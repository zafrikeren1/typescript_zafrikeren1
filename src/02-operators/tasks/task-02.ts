/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const minimumGrade = 75;
const studentGrade = 82;
const minimumAttendance = 90;
const studentAttendance = 94;
const tuitionFeesPaid : boolean = true;

const isEligible: boolean =
    studentGrade >= minimumGrade &&
    studentAttendance >= minimumAttendance &&
    tuitionFeesPaid === true;

console.log("Is eligible for graduation ceremony: ", isEligible)