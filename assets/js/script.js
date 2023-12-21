import { hideAndShowPassword, input } from "./elements.js";
import {
  checkUpperCase,
  checkLowerCase,
  checkNumber,
  checkSymbol,
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
  const inputValue = this.value;

  //   console.log({ inputValue });

  //   console.log(checkUpperCase(inputValue));

  console.log(checkSymbol(inputValue));
});
