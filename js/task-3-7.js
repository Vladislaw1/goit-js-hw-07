const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const parentEl = document.querySelector('#gallery');
// console.log(parentEl);
// parentEl.style.display = 'flex';

// const listImagesEl = images.map(elem => {
//     const listEl = document.createElement('li');
//     listEl.style.listStyle = 'none';
//     listEl.style.margin = '0 auto';
//     listEl.style.marginRight = '20px';

//     const imgEl = document.createElement('img');

//   imgEl.setAttribute('src', elem.url);
//   imgEl.setAttribute('alt', elem.alt);
//     imgEl.width = 320;
//     imgEl.height = 200;
    
    


//     listEl.append(imgEl)

//     console.log(listEl);
//     console.log(imgEl);

//     return listEl;
// })

// parentEl.append(...listImagesEl)

const parentEl = document.querySelector('#gallery')

const makeListMurkup = ({url, alt }) => {
    return ` 
       <li>

            <img src ='${url}'  alt = '${alt}' width=320>
       
        </li>
    `
}

const makeListEl = images.map(makeListMurkup).join(' ');


parentEl.insertAdjacentHTML('beforebegin', makeListEl);
