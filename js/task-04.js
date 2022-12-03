const decrementEl = document.querySelector('[data-action ="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const spanEl = document.getElementById("value");
//  ----------1 варіант ---------//
decrementEl.addEventListener("click", () => {
  spanEl.textContent = Number(spanEl.textContent) - 1;
});
incrementEl.addEventListener("click", () => {
  spanEl.textContent = Number(spanEl.textContent) + 1;
});

// ------------------2 варіант------------//

// let counterValue = 0;
// decrementEl.addEventListener("click", onDecrementEl);
// incrementEl.addEventListener("click", onIncrementEl);
// function onDecrementEl() {
//   spanEl.textContent = --counterValue;
// }
// function onIncrementEl() {
//   spanEl.textContent = ++counterValue;
// }
