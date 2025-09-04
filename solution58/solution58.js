// BEGIN (write your solution here)
const getLetter = (s, n) => {
  if (s[n - 1] === undefined) {
    return "";
  } else {
    return s[n - 1];
  }
};
// END

export default getLetter;
