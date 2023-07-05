export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: strin;,
 }
/* Creating two studets using Student interface */
const studentA:Student = {
  firstName: "Thoma";
  lastName: "chris';
  age: 25;
  location: "German";
  }

const studentB: Student = {
  firstName: "Fantu";
  lastName: "Tada";
  age: 23;
  location: "Ethiopia";
  }

/* creating an array for the above two students */

const studentsList: Array<Student> = [
  studentA;
  studentB;  
];
