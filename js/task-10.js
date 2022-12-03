const inputNuber = document.querySelector("#controls>input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

const newBoxes = document.querySelector("#boxes");

let boxSize = 30; // розміри 30*30
let numberBox = 0;

inputNuber.addEventListener("input", onInput);
btnCreate.addEventListener("click", onBtnCreate);
btnDestroy.addEventListener("click", destroyBoxes);

function onBtnCreate() {
  createBoxes(numberBox);
  numberBox = "";
}

function onInput(evt) {
  numberBox = Number(evt.currentTarget.value);
}

function createBoxes(amount) {
  let newBox = "";
  for (let i = 1; i <= amount; i += 1) {
    let newBoxSize = boxSize + i * 10;
    const randomColor = getRandomHexColor();
    console.log(newBoxSize);
    newBox += `<div style = "width: ${newBoxSize}px; height: ${newBoxSize}px; background-color: ${randomColor}"></div> \n`;
    console.log(newBox);
  }
  newBoxes.insertAdjacentHTML("beforeend", newBox);

  inputNuber.value = "";
}

function destroyBoxes() {
  newBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
