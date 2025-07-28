let n = 10;

const rnd10 = (n) => {
  return Math.round(Math.random(n) * 10, 0);
};

console.log(rnd10(10));
