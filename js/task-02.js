const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elUl = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();


for (const ingredient of ingredients) {
  const elLi = document.createElement("li");
  elLi.textContent = ingredient;
  elLi.classList.add("item");
  fragment.appendChild(elLi);
}

elUl.appendChild(fragment);
