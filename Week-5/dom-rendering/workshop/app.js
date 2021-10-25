// // CHALLENGE 1:

// import dogs from './dogs.js';

// const dogElems = dogs.map((dog) => {
//   const h2 = document.createElement('h2');
//   h2.textContent = dog.name;

//   const img = document.createElement('img');
//   img.src = dog.image;
//   img.alt = `Image of ${dog.name}`;

//   const li = document.createElement('li');
//   li.append(h2, img);

//   return li;
// });

// const title = document.createElement('h1');
// title.textContent = 'Many dogs';

// const list = document.createElement('ul');
// list.append(...dogElems);

// document.querySelector('#app').append(title, list);

// // CHALLENGE 2:

// import createEl from './create-element.js';
// import dogs from './dogs.js';

// const dogElems = dogs.map((dog) => {
//   const h2 = createEl('h2', {}, dog.name);
//   const img = createEl('img', {
//     src: dog.image,
//     alt: `Image of ${dog.name}`,
//     width: 500,
//     height: 300,
//   });
//   return createEl('li', { className: 'card ' }, h2, img);
// });

// const title = createEl('h1', {}, 'Many dogs');
// const list = createEl('ul', {}, ...dogElems);

// document.querySelector('#app').append(title, list);

// // CHALLENGE 3:

// import dogs from './dogs.js';

// const dogElems = dogs.map((dog) => {
//   return /* html */ `
//     <li class = 'card'>
//       <h2>${dog.name}</h2>
//       <img src='${dog.image}' alt='Image of ${dog.name}' width: '500' height: '300' />
//     </li>
//   `;
// });

// document.querySelector('#app').innerHTML = /* html */ `
//   <h1>Many dogs</h1>
//   <ul>
//     ${dogElems.join('\n')}
//   </ul>
//   `;

// // CHALLENGE 4:

// import dogs from './dogs.js';

// const cardTemplate = document.querySelector('#cardTemplate');

// const dogElems = dogs.map((dog) => {
//   const clone = cardTemplate.content.cloneNode(true);
//   clone.querySelector('h2').append(dog.name);
//   clone.querySelector('img').src = dog.image;
//   return clone;
// });

// const pageTemplate = document.querySelector('#pageTemplate');
// const clone = pageTemplate.content.cloneNode(true);
// clone.querySelector('ul').append(...dogElems);

// document.querySelector('#app').append(clone);

// CHALLENGE 5:

import dogs from './dogs.js';

const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
  <li class="card">
    <h2></h2>
    <img src="" alt="" width="500" height="300" />
  </li>
`;

const dogElems = dogs.map((dog) => {
  const clone = cardTemplate.content.cloneNode(true);
  clone.querySelector('h2').append(dog.name);
  clone.querySelector('img').src = dog.image;
  return clone;
});

const pageTemplate = document.createElement('template');
pageTemplate.innerHTML = `
  <h1>All the dogs</h1>
  <ul></ul>
`;
const clone = pageTemplate.content.cloneNode(true);
clone.querySelector('ul').append(...dogElems);

document.querySelector('#app').append(clone);
