const userName = document.querySelector('#name-input');
const helloMessage = document.querySelector('#name-output');

const emptyName = 'Anonymous';

userName.addEventListener('input', onInputName);

function onInputName(event) {
    helloMessage.textContent = event.currentTarget.value || emptyName;
}
