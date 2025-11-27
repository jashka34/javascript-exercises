// BEGIN (write your solution here)
const filterString = (s, c) => {
  let res = "";
  s.split("").forEach((ch) => {
    if (ch !== c) {
      res += ch;
    }
  });
  return res;
};
// END

export default filterString;
