function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const mainBackground = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", colorChange);

function colorChange() {
  mainBackground.style.background = `${getRandomHexColor()}`;
  spanColor.textContent = `${getRandomHexColor()}`;
}