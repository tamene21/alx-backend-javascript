export default function createIteratorObject(report) {
  const empList = [];
  for (const idx of Object.values(report.allEmployees)) {
    empList.push(...idx);
  }
  return empList;
}
