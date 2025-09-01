// We wrote the reverse() function solely for our exercises
// It uses some techniques that we haven't covered in our lessons yet
const reverse = (s) => s.split("").reverse().join("");

// BEGIN (write your solution here)
const isPalindrome = (s) => {
  return s.toUpperCase() === reverse(s).toUpperCase();
};
const isNotPalindrome = (s) => {
  return !!!isPalindrome(s);
};
// END

export default isNotPalindrome;
