// BEGIN (write your solution here)
const whoIsThisHouseToStarks = (s) => {
  if (s === "Tally" || s === "Karstark") {
    return "friend";
  } else if (s === "Martell") {
    return "neutral";
  } else if (s === "Lannister") {
    return "enemy";
  } else {
    return "neutral";
  }
};
// END

export default whoIsThisHouseToStarks;
