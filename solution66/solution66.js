// BEGIN (write your solution here)
const joinNumbersFromRange = (n1, n2) => {
  let i = n1;
  let res = "";
  while (i <= n2) {
    res = `${res}${i}`;
    i++;
  }
  return res;
};
// END

export default joinNumbersFromRange;
