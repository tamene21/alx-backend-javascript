export default function updateStudentGradeByCity(students, city, newGrades) {
  const orginalGrade = { grade: 'N/A' };
  /* checking if the student is in the arrat */
  if (students instanceof Array) {
    /* if it available fileter for the specific city and return full info with new grades */
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || orginalGrade).grade,
      }));
  }
  /* otherwise return empty array */
  return [];
}
