import {
  hideAndShowPassword,
  input,
  lowerCaseEl,
  numberEl,
  passwordHint,
  passwordModalCloseButton,
  passwordMoreInfoContainer,
  passwordRequirementOne,
  passwordRequirementTwo,
  passwordSpaceRemoveButton,
  passwordSpaceSpaceModal,
  passwordStrengthStepEl,
  showMoreInfoButton,
  symbolEl,
  upperCaseEl,
} from "./elements.js";
import { colors } from "./theme.js";
import {
  checkUpperCase,
  checkLowerCase,
  checkNumber,
  checkSymbol,
  checkWhiteSpace,
  hintMessages,
} from "./utils.js";

// ===========> DECLARE NECESSARY VARIABLES
let passRequirements = {};

hideAndShowPassword.addEventListener("click", function () {
  const eye = this.querySelector(".eye");
  const typeText = this.querySelector(".right__password-type");

  if (eye.classList.contains("fa-eye-slash")) {
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
    typeText.innerText = "Hide";
    input.type = "text";
  } else {
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
    typeText.innerText = "Show";
    input.type = "password";
  }
});

input.addEventListener("input", function (e) {
  const inputValue = this.value.trim();

  if (inputValue) {
    hideAndShowPassword.style.display = "block";
  } else hideAndShowPassword.style.display = "";

  const upperCase = handleUpperCase(inputValue);
  const lowerCase = handleLowerCase(inputValue);
  const number = handleNumber(inputValue);
  const symbol = handleSymbol(inputValue);
  const space = handleSpace(inputValue);

  handlePasswordRequirements();
  handlePasswordLength(inputValue);
  handlePasswordHint(inputValue, upperCase, lowerCase, number, symbol);
  handlePasswordStrengthStep(inputValue, upperCase, lowerCase, number, symbol);
  handleShowMoreInfo(upperCase, lowerCase, number, symbol, space);
});

const handleUpperCase = (inputValue) => {
  const upperCase = checkUpperCase(inputValue);

  if (!upperCase.length) {
    upperCaseEl.classList.remove("success");
    passRequirements["uppercase"] = 0;
  } else {
    upperCaseEl.classList.add("success");
    passRequirements["uppercase"] = 1;
  }

  return upperCase;
};

const handleLowerCase = (inputValue) => {
  const lowerCase = checkLowerCase(inputValue);

  if (!lowerCase.length) {
    lowerCaseEl.classList.remove("success");
    passRequirements["lowercase"] = 0;
  } else {
    lowerCaseEl.classList.add("success");
    passRequirements["lowercase"] = 1;
  }

  return lowerCase;
};

const handleNumber = (inputValue) => {
  const number = checkNumber(inputValue);

  if (!number.length) {
    numberEl.classList.remove("success");
    passRequirements["number"] = 0;
  } else {
    numberEl.classList.add("success");
    passRequirements["number"] = 1;
  }

  return number;
};

const handleSymbol = (inputValue) => {
  const symbol = checkSymbol(inputValue);

  if (!symbol.length) {
    symbolEl.classList.remove("success");
    passRequirements["symbol"] = 0;
  } else {
    symbolEl.classList.add("success");
    passRequirements["symbol"] = 1;
  }

  return symbol;
};

const handleSpace = (inputValue) => {
  const space = checkWhiteSpace(inputValue);

  if (!space.length) {
    passwordSpaceSpaceModal.style.display = "none";
  } else {
    passwordSpaceSpaceModal.style.display = "block";
  }

  return space;
};

passwordSpaceRemoveButton.addEventListener("click", function (e) {
  const removeSpace = input.value.trim().split(" ").join("");

  input.value = removeSpace;
  passwordSpaceSpaceModal.style.display = "none";
});

passwordModalCloseButton.addEventListener("click", () => {
  passwordSpaceSpaceModal.style.display = "none";
});

const handlePasswordRequirements = () => {
  const passRequirementsValue = Object.values(passRequirements);
  const passRequirementsCount = passRequirementsValue.reduce(
    (acc, curr) => acc + curr,
    0
  );

  if (passRequirementsCount >= 3) {
    passwordRequirementTwo.classList.add("correct");
  } else {
    passwordRequirementTwo.classList.remove("correct");
  }
};

const handlePasswordLength = (inputValue) => {
  if (inputValue.length >= 8) {
    passwordRequirementOne.classList.add("correct");
  } else {
    passwordRequirementOne.classList.remove("correct");
  }
};

const handlePasswordHint = (
  inputValue,
  upperCase,
  lowerCase,
  number,
  symbol
) => {
  let message = "";
  if (!inputValue.length) {
    passwordHint.innerHTML = "";
    return;
  }

  if (inputValue.length < 8) {
    message = hintMessages.length;
  } else if (!upperCase.length && !lowerCase.length) {
    message = hintMessages.letters;
  } else if (!number.length) {
    message = hintMessages.number;
  } else if (!symbol.length) {
    message = hintMessages.symbol;
  } else {
    message = hintMessages.perfect;
  }
  passwordHint.innerText = message;
};

const handlePasswordStrengthStep = (
  inputValue,
  upperCase,
  lowerCase,
  number,
  symbol
) => {
  const setColor = (stepNo, color = colors.whiteShade) => {
    passwordStrengthStepEl(stepNo).style.backgroundColor = color;
  };

  if (inputValue.length >= 8) {
    setColor(1, colors.error);
  } else {
    setColor(1);
  }

  if (inputValue.length >= 8 && (upperCase.length || lowerCase.length)) {
    setColor(2, colors.warning);
  } else {
    setColor(2);
  }

  if (
    inputValue.length >= 8 &&
    (upperCase.length || lowerCase.length) &&
    number.length
  ) {
    setColor(3, colors.info);
  } else {
    setColor(3);
  }

  if (
    inputValue.length >= 8 &&
    upperCase.length &&
    lowerCase.length &&
    number.length &&
    symbol.length
  ) {
    setColor(4, colors.success);
  } else {
    setColor(4);
  }
};

const handleShowMoreInfo = (upperCase, lowerCase, number, symbol, space) => {
  const moreInfoArrOfObj = [
    {
      title: "Upper-case",
      item: upperCase,
      total: upperCase.length,
    },
    {
      title: "Lower-case",
      item: lowerCase,
      total: lowerCase.length,
    },
    {
      title: "Numbers",
      item: number,
      total: number.length,
    },
    {
      title: "Symbols",
      item: symbol,
      total: symbol.length,
    },
    // {
    //   title: "Spaces",
    //   item: space,
    //   total: space.length,
    // },
  ];

  const filterValidMoreInfo = moreInfoArrOfObj.filter(({ total }) => total);

  const createMoreInfoMarkup = filterValidMoreInfo.map(
    ({ title, item, total }) => {
      const markup = `
    <div class="password__more-info-wrapper">
      <h3 class="password__more-info-title">${title}</h3>
      <div class="password__more-info-details-container">
        <div>
          <div class="password__more-info-details-title">Characters</div>
          <div class="password__more-info-details">
            ${item.join(", ")}
          </div>
        </div>
        <div class="password__more-info-details-line"></div>
        <div>
          <div class="password__more-info-details-title">Total</div>
          <div
            class="password__more-info-details password__more-info-details--total"
          >
            ${total}
          </div>
        </div>
      </div>
    </div>
    `;

      return markup;
    }
  );

  passwordMoreInfoContainer.innerHTML = createMoreInfoMarkup.join(" ");
};

showMoreInfoButton.addEventListener("click", function (e) {
  if (passwordMoreInfoContainer.style.display === "block") {
    passwordMoreInfoContainer.style.display = "none";
    this.innerText = "Show More Info";
  } else {
    passwordMoreInfoContainer.style.display = "block";
    this.innerText = "Hide More Info";
  }
});
