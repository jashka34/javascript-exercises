const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  let n = initialNumber + 1;
  while (n-- !== 1) {
    console.log(n);
  }
  console.log("finished!");
  // END
};

export default printNumbers;
