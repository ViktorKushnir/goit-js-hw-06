const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((element) => {
  let categories = element.querySelector("h2").textContent;
  let numberElement = element.querySelectorAll("li");
  console.log(`Category: ${categories}`);
  console.log(`Elements: ${numberElement.length}`);
});
