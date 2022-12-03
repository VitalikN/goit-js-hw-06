const inputEl = document.getElementById("validation-input");
const inputLengthEl = inputEl.getAttribute("data-length");
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(elm) {
  const { value } = elm.currentTarget;

  value.length >= inputLengthEl
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
  value.length >= inputLengthEl
    ? inputEl.classList.remove("invalid")
    : inputEl.classList.remove("valid");
}
