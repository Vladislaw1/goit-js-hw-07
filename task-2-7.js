// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const parentEl = document.querySelector('#ingredients');

// const makeList = ingredients.map( ingredient => {
//         const item = document.createElement('li');
//         item.textContent = ingredient;
//         return item;
// })
    
// // const add = makeList(ingredients);
// parentEl.append(...makeList);

// // parentEl.appendChild()
// // for (const element of ingredients) {
//     //     console.log(element)
//     // }
    

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

// Задание 3

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

