const hasChar = (s, ch) => {
  let cur = 0;
  while (cur <= s.length) {
    if (s[cur] === ch) {
      return true;
    }
    cur++;
  }
  return false;
};
export default hasChar;
