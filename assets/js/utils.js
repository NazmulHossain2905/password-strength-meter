const checkUpperCase = (text = "") => {
  const upperCase = text.match(/[A-Z]/g);

  return upperCase || [];
};

const checkLowerCase = (text = "") => text.match(/[a-z]/g) || [];
const checkNumber = (text = "") => text.match(/[0-9]/g) || [];
const checkWhiteSpace = (text = "") => text.match(/\s/g) || [];

const checkSymbol = (text = "") => {
  const allSymbols = `!"#$%&'()*+,-./:;<=>?@[]\\^_\`{}|~`;
  const symbolArr = [...allSymbols];
  const textArr = [...text];

  const symbols = textArr.filter((text) =>
    symbolArr.find((symbol) => symbol === text)
  );

  return symbols;
};

const hintMessages = {
  length: "😟 Week, Must contain at least 8 characters",
  letters: "🙂 So-so. Must contain at least 1 letter",
  number: "🥱 Good. Please contain at least 1 number",
  symbol: "😃 Almost. Must contain special symbol",
  perfect: "😎 Awesome! You have a secure password",
};

export {
  checkUpperCase,
  checkLowerCase,
  checkNumber,
  checkSymbol,
  checkWhiteSpace,
  hintMessages,
};
