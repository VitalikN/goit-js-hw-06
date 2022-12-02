const inputSizeEl = document.getElementById("font-size-control");
const spanTextEl = document.getElementById("text");

inputSizeEl.addEventListener("input", onInputFontSize);
function onInputFontSize(evt) {
  spanTextEl.style.fontSize = evt.currentTarget.value + "px";
}
