// BEGIN (write your solution here)
const multiplyNumbersFromRange = (start, finish) => {
  let m = 1;
  let i = start;
  while (i <= finish) {
    m *= i;
    i++;
  }
  return m;
};
// END

export default multiplyNumbersFromRange;
