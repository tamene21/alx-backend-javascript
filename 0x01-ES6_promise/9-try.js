/* a quardrail function accepting a function argument  */
export default function guardrail(mathFunction) {
  /* declaring empty array  */
  const queue = [];
  /* try to compute the maths function and push to the array */
  try {
    queue.push(mathFunction());
  } catch (err) {
    /* If the computation is not successful catch & push the error message to the array  */
    queue.push(String(err));
  } finally {
    /* for every computation append the below message */
    queue.push('Guardrail was processed');
  }
  /* return the array */
  return queue;
}
