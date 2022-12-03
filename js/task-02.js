const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const foo = (ingredients) => {
  let listEl = document.getElementById("ingredients");
  for (let ingredient of ingredients) {
    // створюємо li
    const itemEl = document.createElement("li");
    // добавляємо клас
    itemEl.classList.add("js-item");
    // добавляєм ingredient в кінець li
    itemEl.insertAdjacentHTML("beforeend", ingredient);
    // всі li вставляємо в  ul
    listEl.append(itemEl);
  }
  console.log(listEl);
};
foo(ingredients);
