import { hideAndShowPassword, input } from "./elements.js";
import {
  checkUpperCase,
  checkLowerCase,
  checkNumber,
  checkSymbol,
  checkWhiteSpace,
} from "./utils.js";

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

  //   const removeSpace = inputValue.split(" ").join("");
  //   console.log(removeSpace);

  const upperCase = checkUpperCase(inputValue);
  const lowerCase = checkLowerCase(inputValue);
  const number = checkNumber(inputValue);
  const symbol = checkSymbol(inputValue);
  const whiteSpace = checkWhiteSpace(inputValue);

  console.log(upperCase);
  console.log(lowerCase);
  console.log(number);
  console.log(symbol);
  console.log(whiteSpace);
});
