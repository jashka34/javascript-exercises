const even = (s) => {
  let res = "";
  s.split("").forEach((e, i) => {
    if ((i + 1) % 2 === 0) {
      res += e;
    }
  });
  return res;
};

export default even;
