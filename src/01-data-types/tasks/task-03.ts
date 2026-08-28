/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

let student1: { id: string; fullName: string; age: number; isActive: boolean } = {
  id: "S001",
  fullName: "John Doe",
  age: 20,
  isActive: true,
};

console.log("Student 1:", student1);

let student2: { id: string; fullName: string; age: number; isActive: boolean } = {
    id: "S002",
    fullName: "Jane Smith",
    age: 22,
    isActive: false,
};

console.log("Student 2:", student2);