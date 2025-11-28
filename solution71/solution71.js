const makeItFunny = (s, n) => {
  let res = "";
  s.split("").forEach((ch, i) => {
    if (++i % n === 0) {
      res += ch.toUpperCase();
    } else {
      res += ch;
    }
  });
  return res;
};
export default makeItFunny;
