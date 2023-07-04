export default function getStudentIdsSum(students) {
  return students.reduce((sum, num) => sum + num.id);
}
