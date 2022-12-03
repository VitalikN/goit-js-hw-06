const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listEl = document.getElementById("ingredients");
const listItemEl = ingredients.map((item) => {
  const itemEl = document.createElement("li");

  itemEl.classList.add("js-item");

  itemEl.insertAdjacentHTML("beforeend", item);

  return itemEl;
});
listEl.append(...listItemEl);
