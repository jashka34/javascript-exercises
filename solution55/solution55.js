const isInternationalPhone = (string) => {
  const firstLetter = string[0];
  return "+" === firstLetter;
};
export default isInternationalPhone;
