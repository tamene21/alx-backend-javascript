/**
 * reading a file from a database
 */

/* Using the filesystem module */
const fs = require('fs');
/* accessing the filepath */
const countStudents = (path) => {
  if (!fs.existsSynch(path)) {
    throw Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf-8');
  const studentData = data
    .split('\n')
    .map((students) => students.split(','))
    .filter((students) => students.length === 4 && students[0] !== 'firstname')
    .map((students) => ({
      firstname: students[0],
      lastname: students[1],
      age: students[2],
      field: students[3],
    }));

  const csStudents = studentData
    .filter((students) => students.field === 'CS')
    .map((students) => students.firstname);

  const sweStudents = studentData
    .filter((students) => students.field === 'SWE')
    .map((students) => students.firstname);
  console.log(`Number of students : ${studentData.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(',')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(',')}`);
};

module.exports = countStudents;
