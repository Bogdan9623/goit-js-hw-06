let counterValue = 0;

const decr = document.querySelector('button[data-action="decrement"]');
const span = document.querySelector('#value');
const incr = document.querySelector('button[data-action="increment"]');

incr.addEventListener('click', onAddNumber);
decr.addEventListener('click', onRemoveNumber)

function onAddNumber() {
    counterValue += 1;
    span.textContent = counterValue;
}
function onRemoveNumber() {
    counterValue -= 1;
    span.textContent = counterValue;
}