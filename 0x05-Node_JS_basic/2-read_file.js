/**
 * reading a file from a database
 */

/* Using the filesystem module */
const fs = require('fs');
/* accessing the filepath */
const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8');
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({
      firstname: student[0],
      lastname: student[1],
      age: student[2],
      field: student[3],
    }));

  const csStudents = students
    .filter((student) => student.field === 'CS')
    .map((student) => student.firstname);

  const sweStudents = students
    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstname);
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(',')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(',')}`);
};

module.exports = countStudents;
