const getHiddenCard = (cn, c = 4) => {
  return "*".repeat(c) + cn.substring(cn.length - 4);
};
export default getHiddenCard;
