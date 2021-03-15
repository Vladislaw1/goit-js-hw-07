const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text')

inputEl.addEventListener('input',onFontSize)

function onFontSize(event) {
    spanEl.style.fontSize = inputEl.value + 'px';
}

