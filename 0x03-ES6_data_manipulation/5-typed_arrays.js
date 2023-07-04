export default function createInt8TypedArray(length, position, value) {
  /* check the availability of enough space for storage */
  if (position >= length) {
    throw new Error('Position outside range');
  }
  /* Creating cart and data setting interface */
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
