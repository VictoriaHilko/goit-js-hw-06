const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const currentValue = document.querySelector('#value');

let counterValue = 0;


const incrementAction = () => {
    counterValue += 1;
};

const decrementAction = () => {
    counterValue -= 1;
};

incrementBtn.addEventListener('click', () => {
    incrementAction();
    currentValue.textContent = counterValue;
});
decrementBtn.addEventListener('click', () => {
    decrementAction();
    currentValue.textContent = counterValue;
});
