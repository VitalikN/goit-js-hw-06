const listEl = document.querySelector("#categories");
console.log(`Number of categories:`, listEl.childElementCount);

const listItemEl = document.querySelectorAll(".item ");

listItemEl.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent} \n Elements:`,
    element.lastElementChild.children.length
  );
});

//----------------------------------

// //  перший
// console.log(`Category:`, listEl.children[0].firstElementChild.textContent);
// console.log(`Elements:`, listEl.children[0].lastElementChild.children.length);
// // другий
// console.log(`Category:`, listEl.children[1].firstElementChild.textContent);
// console.log(`Elements:`, listEl.children[1].lastElementChild.children.length);
// //
// // третій
// console.log(`Category:`, listEl.children[2].firstElementChild.textContent);
// console.log(`Elements:`, listEl.children[2].lastElementChild.children.length);
