export default function appendToEachArrayValue(array, appendString) {
  /* setting empty array */
  const newVal = [];
  for (const idx of array) {
    newVal.push(appendString + idx);
  }

  return newVal;
}
