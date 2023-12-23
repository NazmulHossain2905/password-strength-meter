const hideAndShowPassword = document.querySelector(
  ".right__password-hide-show-wrapper"
);
const input = document.querySelector(".right__password-input");
const passwordRequirementsList = document.querySelector(
  ".password__requirements-lists"
);

const upperCaseEl = passwordRequirementsList.querySelector(
  ".password__requirement-item-uppercase"
);
const lowerCaseEl = passwordRequirementsList.querySelector(
  ".password__requirement-item-lowercase"
);
const numberEl = passwordRequirementsList.querySelector(
  ".password__requirement-item-number"
);
const symbolEl = passwordRequirementsList.querySelector(
  ".password__requirement-item-special"
);

const passwordRequirementOne = document.querySelector(
  ".password__requirement--one"
);
const passwordRequirementTwo = document.querySelector(
  ".password__requirement--two"
);

const passwordSpaceSpaceModal = document.querySelector(
  ".right__password-space-alert-modal"
);
const passwordSpaceRemoveButton = document.querySelector(
  ".right__password-space-remove-button"
);
const passwordModalCloseButton = document.querySelector(
  ".right__password-modal-close-button"
);

const passwordStrengthStepEl = (stepNo = 1) => {
  return document.querySelector(`.password__strength-step--${stepNo}`);
};

const passwordHint = document.querySelector(".password__hint-wrapper");
const passwordMoreInfoContainer = document.querySelector(
  ".password__more-info-container"
);
const showMoreInfoButton = document.querySelector(".password__more-info-text");

export {
  hideAndShowPassword,
  input,
  passwordRequirementsList,
  upperCaseEl,
  lowerCaseEl,
  numberEl,
  symbolEl,
  passwordRequirementOne,
  passwordRequirementTwo,
  passwordSpaceSpaceModal,
  passwordSpaceRemoveButton,
  passwordModalCloseButton,
  passwordStrengthStepEl,
  passwordHint,
  passwordMoreInfoContainer,
  showMoreInfoButton,
};
