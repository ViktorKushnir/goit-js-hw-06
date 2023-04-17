const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", BorderColor);

function BorderColor(event) {
  const inputDataLength = Number(textInput.dataset.length);
  const inputValueLength = Number(textInput.value.trim().length);

  if (inputValueLength === inputDataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
