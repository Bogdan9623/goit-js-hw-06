const fontControler = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

fontControler.addEventListener("input", fontControlerValue);

function fontControlerValue() {
    const fontSize = fontControler.value;
    spanText.style.fontSize = `${fontSize}px`;
};