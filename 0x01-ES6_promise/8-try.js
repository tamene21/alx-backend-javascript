export default function divideFunction(numerator, denominator) {
  /* check if the denominator is zero */
  if (denominator === 0) {
    /* if so throw error message */
    throw Error('cannot divide by 0');
  } else {
    /* otherwise return the result */
    return numerator / denominator;
  }
}
