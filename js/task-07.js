const sizeController = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


sizeController.addEventListener('input', onChange);

function onChange(event) {
    console.log(event.currentTarget.value);
    text.style.fontSize = `${event.currentTarget.value}px`;
}
