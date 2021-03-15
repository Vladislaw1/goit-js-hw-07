const inputNameEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

onInput = () => {
    inputNameEl.value !== '' ? nameOutputEl.innerHTML = inputNameEl.value : nameOutputEl.innerHTML = "незнакомец";
}

inputNameEl.addEventListener('input', onInput);

// input.onInput = function{
//     input.value === ''
// }
// nameOutputEl.addEventListener('input', onOutput);


// function onOutput(event) {
//     console.log(event.currentTarget.value);
//     nameOutputEl.textContent = event.currentTarget.value;
// }

// function onInput(event) {
//     if (event.currentTarget.value !== '') {
//         nameOutputEl.textContent = event.currentTarget.value;
//     } else {
//         nameOutputEl.textContent = 'незнакомец';
//     }
// }

