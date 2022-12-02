const decrementEl = document.querySelector('[data-action ="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const spanEl = document.getElementById("value");

decrementEl.addEventListener("click", onDecrementEl);
incrementEl.addEventListener("click", onIncrementEl);
let counterValue = 0;

function onDecrementEl() {
  spanEl.textContent = --counterValue;
}
function onIncrementEl() {
  spanEl.textContent = ++counterValue;
}
