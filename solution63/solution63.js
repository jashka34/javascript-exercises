const getNumberExplanation = (n) => {
  let ret;
  switch (n) {
    case 666:
      ret = "devil number";
      break;
    case 42:
      ret = "answer for everything";
      break;
    case 7:
      ret = "prime number";
      break;
    default:
      ret = "just a number";
  }
  return ret;
};
export default getNumberExplanation;
