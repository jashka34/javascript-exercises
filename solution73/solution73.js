const encrypt = (s) => {
  let res = "";
  for (let i = 1; i < s.length; i += 2) {
    if (i < s.length) {
      res += s[i] + s[i - 1];
    }
  }
  return res;
};
export default encrypt;
