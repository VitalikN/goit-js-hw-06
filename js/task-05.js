const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
//
inputEl.addEventListener("input", onInput);

const initialSpanEl = spanEl.textContent;
function onInput(evt) {
  //   console.log(" input :", evt.currentTarget.value);
  spanEl.textContent = evt.currentTarget.value
    ? evt.currentTarget.value
    : initialSpanEl;
}
