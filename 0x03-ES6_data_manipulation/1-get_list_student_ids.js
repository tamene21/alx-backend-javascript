export default function getListStudentIds(ary) {
  if (Array.isArray(ary)) return ary.map((x) => x.id);
  return [];
}
