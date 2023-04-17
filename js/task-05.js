const inputText = document.getElementById("name-input");
const text = document.getElementById("name-output");

const placeholder = (event) => {
  text.textContent =
    inputText.value !== "" ? event.currentTarget.value : "Anonymous";
};

inputText.addEventListener("input", placeholder);
