let counterValue = 0;
const valueRef = document.getElementById("value");
const buttonLas = document.querySelector('[data-action="decrement"]');
const buttonPlas = document.querySelector('[data-action="increment"]');

const las = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const plas = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

buttonLas.addEventListener("click", las);
buttonPlas.addEventListener("click", plas);
