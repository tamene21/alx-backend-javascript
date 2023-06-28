export default function divideFunction(numerator, denominator) {
  if (denominator !== 0){
    try {
      return numerator / denominator
    } 
    catch(error) {
      console.log('cannot divide by 0');    
    }
}
