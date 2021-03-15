const parentEl = document.querySelector('#counter')

const decrementBtnEl = parentEl.querySelector('[data-action="decrement"]');
const valueEl = parentEl.querySelector("#value");
const incrementBtnEl = parentEl.querySelector('[data-action="increment"]');

let value = 0;

clickButtonDicrement = () => {
    if (value > 0) {
        value -= 1;
        valueEl.textContent = value;
    }
};

 clickButtonIncrement = () => {
    value += 1;
    valueEl.textContent = value;
 };

decrementBtnEl.addEventListener('click', clickButtonDicrement);
incrementBtnEl.addEventListener('click', clickButtonIncrement);
