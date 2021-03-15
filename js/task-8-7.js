const parentInputEl_1 = document.querySelector('#controls');
const parentInputEl_2 = document.querySelector('#boxes');

const renderBtnEl = parentInputEl_1.querySelector('[data-action="render"]');
const destroyBtnEl = parentInputEl_1.querySelector('[data-action="destroy"]');
const inputNumEl = parentInputEl_1.querySelector('input');


renderBtnEl.addEventListener('click', function(){
    createBoxes(inputNumEl.value);
});
destroyBtnEl.addEventListener('click', onDestroy);


function createBoxes(amount) {
    
    for (let i = 1; i <= amount; i += 1) {
        
        const element = document.createElement('div');
        
        element.style.backgroundColor = `rgba(${ random() }, ${ random() }, ${ random()}`;
        
        element.style.width = `${20 + i * 10}px`;
        element.style.height = `${20 + i * 10}px`;
        parentInputEl_2.append(element);
    }
}


function random() {
    return Math.floor(Math.random() * 256);
}

function onDestroy(event) {
    parentInputEl_2.innerHTML = '';
}