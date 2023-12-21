const checkUpperCase = (text = "") => {
  const upperCase = text.match(/[A-Z]/g);

  return Array.isArray(upperCase);
};

const checkLowerCase = (text = "") => Array.isArray(text.match(/[a-z]/g));
const checkNumber = (text = "") => Array.isArray(text.match(/[0-9]/g));

const checkSymbol = (text = "") => {
  const allSymbols = `!"#$%&'()*+,-./:;<=>?@[]\\^_\`{}|~`;
  const symbolArr = [...allSymbols];
  const textArr = [...text];

  const symbols = textArr.filter((text) =>
    symbolArr.find((symbol) => symbol === text)
  );

  return symbols.length > 0;
};

export { checkUpperCase, checkLowerCase, checkNumber, checkSymbol };
