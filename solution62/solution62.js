function reverse(s) {
  return s.split("").reverse().join("");
}
const convertText = (s) => {
  return s === "" ? "" : s[0].toUpperCase() !== s[0] ? reverse(s) : s;
};
export default convertText;
