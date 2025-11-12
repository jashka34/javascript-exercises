// BEGIN (write your solution here)
const printReversedWordBySymbol = (w) => {
  let i = w.length - 1;
  while (i >= 0) {
    console.log(w[i]);
    i = i - 1;
  }
};

// END

export default printReversedWordBySymbol;
