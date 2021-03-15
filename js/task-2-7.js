
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
 
const parentEl = document.querySelector('#ingredients')

const ingredient = ingredients.map(elem => {
  const item = document.createElement('li');
  item.textContent = elem;
  item.style.listStyle = 'none';
  item.style.display = 'inline-block';
  item.style.marginRight = '30px';
  return item;
})

parentEl.append(...ingredient)

console.log(...ingredients);

