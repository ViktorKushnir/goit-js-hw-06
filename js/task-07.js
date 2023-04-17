const inputRange = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

function fontSizeControl(event) {
  textRef.style.fontSize = event.currentTarget.value + "px";
}

inputRange.addEventListener("input", fontSizeControl);