const inputEl = document.getElementById('validation-input');
const inputValueLength = +inputEl.dataset.length;

inputEl.addEventListener('blur', validator);
inputEl.addEventListener('input', onDefault);

function validator() {
inputEl.value.length === inputValueLength ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
}

function onDefault() {
    inputEl.classList.remove('valid', 'invalid')
}

// function onValidatorInput(event) {
//     if (inputEl.value.length === 0) {
//         inputEl.classList.remove('invalid');
//         inputEl.classList.remove('valid');
//     }
//     else if (inputValueLength >= inputEl.value.length) {
//         inputEl.classList.add('valid');
//         inputEl.classList.remove('invalid');
//     }
//     else if (inputValueLength <= inputEl.value.length) {
//         inputEl.classList.add('invalid');
//         inputEl.classList.remove('valid');
//     } 
// }