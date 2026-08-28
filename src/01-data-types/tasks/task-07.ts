/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
type CourseRegistration = {
    StudentId: number;
    StudentName: string;
    GradeLvl: number;

    CourseId: number;
    CourseTitle: string;
    InstructorName: string;
    LearningHours: number;

    RegistrationDate: string;
    Payment: boolean;
}

const registration_one: CourseRegistration = {
    StudentId: 1029394,
    StudentName: "Zafri Ihza Maheswara",
    GradeLvl: 10,

    CourseId: 10293848,
    CourseTitle: "Jr. Software Engineering",
    InstructorName: "Miss Whyna",
    LearningHours: 2,

    RegistrationDate: "Jum'at, 28 Agustus 2026",
    Payment: true,
};

const registration_two: CourseRegistration = {
    StudentId: 1029395,
    StudentName: "Alya Putri",
    GradeLvl: 11,
    CourseId: 10293849,
    CourseTitle: "Web Development",
    InstructorName: "Miss Whyna",
    LearningHours: 3,
    RegistrationDate: "Sabtu, 29 Agustus 2026",
    Payment: false,
};

const registration_three: CourseRegistration = {
    StudentId: 1029396,
    StudentName: "Bima Pratama",
    GradeLvl: 12,
    CourseId: 10293850,
    CourseTitle: "TypeScript Fundamentals",
    InstructorName: "Miss Whyna",
    LearningHours: 4,
    RegistrationDate: "Minggu, 30 Agustus 2026",
    Payment: true,
};

console.log(registration_one);
console.log(registration_two);
console.log(registration_three);
