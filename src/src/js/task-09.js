const colorEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  colorEl.textContent = newColor;
  body.style.backgroundColor = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// --------------
// btnChangeColor.addEventListener("click", onChangeColor);
// function onChangeColor() {
//   const newColor = getRandomHexColor();
//   colorEl.textContent = newColor;
//   body.style.backgroundColor = newColor;
// }
