const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = images
  .map((img) => {
    return ` <li> 
    <img src =' ${img.url}'  alt=' ${img.alt}' width = 200px height = 200px></li> \n `;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", galleryListEl);

console.log(galleryListEl);

galleryEl.style.display = "flex";
galleryEl.style.gap = "10px";
galleryEl.style.listStyle = "none";