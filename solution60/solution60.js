// BEGIN (write your solution here)
const normalizeUrl = (url) => {
  if (url.startsWith("https://")) {
    return url;
  } else {
    return `https://${url}`;
  }
};
// END

export default normalizeUrl;
