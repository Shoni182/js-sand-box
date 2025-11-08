//; Module № 7. DOM. Події

//! 1 ------ Об'єктна модель документа -------

// #region  //: - HTML-документ і DOM

//; element.querySelector(selector) для одного виду

//; element.querySelectorAll(selector) якщо потрібні всі

/* // тут задаються параметри та звернення до. html
const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';

console.log(listWithId);
console.log('');

// звернення по класу
const listWithClass = document.querySelector('.menu');
console.log(listWithClass);
console.log('');

// звернення по тегу тому їх буде 4 бо в коді 4 шт
const menuItemsByTagName = document.querySelectorAll('li');
console.log(menuItemsByTagName);
console.log('');

// звернення по класу тому їх буде 3 бо один без класу
const menuItemsByClass = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);
console.log('');

const firstMenuItem = document.querySelector('.menu-item');
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem); */

// #endregion

//! 2 ------ Властивості та атрибути -------

// #region  //: - Доступ до властивостей
//; 1
/* const link = document.querySelector('.link');
console.log(link.href);
console.log('');
link.href = 'https://neo.goit.global';
console.log(link.href); */

//; 2

/* const image = document.querySelector('.image');
console.log(image.src);

console.log(image.alt);
console.log('');

image.src = 'https://picsum.photos/id/13/640/480';
image.alt = 'River';

console.log(image.src);
console.log(image.alt); */

// #endregion

// #region  //: - Властивість textContent
//; 1

/* const el = document.querySelector('.text');
const nested = document.querySelector('.sub-text');

console.log(el.textContent); // "Username: Mango"
console.log(nested.textContent); // "Mango" */

// #endregion

// #region  //: - Властивість classList

/* const link = document.querySelector('.link');
console.log(link.classList);
console.log(''); */

//; Метод classList.contains(className) -  true or false - передається без крапки
/* const hasActiveClass = link.classList.contains('is-active');
console.log(hasActiveClass);
const hasActiveClassTitle = link.classList.contains('title');
console.log(hasActiveClassTitle); */

//; Метод classList.add(className)
//  Можна додавати більше одного класу, вказавши кілька аргументів через кому.

/* link.classList.add('special');
console.log(link.classList); */

//; Метод classList.remove(className)
//? Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не видалиться.

/* link.classList.remove('is-active');
console.log(link.classList); */

//; Метод classList.toggle(className)
//?  якщо клас className відсутній, то додає його в кінець списку класів
//? і навпаки, якщо клас className присутній — видаляє його
/* 
link.classList.toggle('is-active');
console.log(link.classList); */

//; Метод classList.replace(oldClassName, newClassName)

/* link.classList.replace('is-active', 'regular');
console.log(link.classList); */
//?Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.

// #endregion

// #region  //: - Властивість style
//? Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.
//? записуються в camelCase нотації, background-color перетворюється на backgroundColor.
//? Властивість style використовується для додавання будь-яких динамічних стилів, наприклад, якщо посилання
//? на фонове зображення невідомо заздалегідь і приходить з бекенда.

/* const button = document.querySelector('.btn');

button.style.backgroundColor = 'teal';
button.style.fontSize = '24px';
button.style.textAlign = 'center';

console.log(button.style); // inline styles object */

// #endregion

// #region  //: - Доступ до атрибутів
//? Метод element.hasAttribute(nameAttribute) = true or false
/* 
const image = document.querySelector('.image');
console.log(image.hasAttribute('src'));

//? Метод element.getAttribute(name Attribute)
console.log(image.getAttribute('alt'));

//? Метод element.setAttribute(nameAttribute, value)
image.setAttribute('alt', 'Amazing nature');
console.log(image.getAttribute('alt'));

//? Метод element.removeAttribute(nameAttribute)
image.removeAttribute('alt');
console.log(document.querySelector('.image')); */

//^Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо, звернувшись до них як до властивостей DOM-об'єкта. Це буде менш затратно за кількістю коду.

// #endregion

// #region  //: - Власні атрибути

/* const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

saveBtn.dataset.action = 'update';
saveBtn.dataset.role = 'admin';

console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin" */

//; 2

/* const buttons = document.querySelectorAll('button');
const cart = document.querySelector('#cart');

buttons.forEach(btn => {
  btn.onclick = () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    cart.innerHTML += `${name} - ${price} грн `;
  };
}); */

//; 3s
/* const buttons = document.querySelector('button');

buttons.forEach(btn => {
  btn.onclick = () => {
    const id = btn.dataset.id;
      const fuel = btn.dataset.fuel;
      ship.innerHTML += `${}`
  };
}); */

// #endregion

//! 3 ------ Створення та видалення елементів  -------

// #region  //: - Створення елементів
/* document.createElement(tagName); */
//^ Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті. З цього моменту можна звертатися до властивостей цього об’єкта і змінювати їх ще до того, як вставимо цей елемент у DOM.

/* const heading = document.createElement('h1');
heading.classList.add('title');
heading.style.fontSize = 20;
heading.textContent = 'This is Heading';
console.log(heading);

const image = document.createElement('img');
image.src = 'https://picsum.photos/id/11/320/240';
image.alt = 'Nature';
console.log(image); */

// #endregion

// #region  //: - Додавання елементів
//? додавання вже до існуючого елементу в html
//? elem.append (el1, el2...) додає елемент після ВСІХ дітей елемента
//? elem.prepend (el1, el2...) додає елемент або декілька перед усіма дітьми елмента elem

/* const list = document.querySelector('.hangar');

// add item to the end of the list
const lastShip = document.createElement('li');
lastShip.textContent = 'Ship B';
list.append(lastShip);

const firstShip = document.createElement('li');
firstShip.textContent = 'Ship 0';
list.prepend(firstShip);

const secondLastShip = document.createElement('li');
secondLastShip.textContent = 'Ship C';
list.append(secondLastShip); */

// #endregion

// #region  //: - Видалення елементів

/* const ship = document.querySelector('li');

ship.remove();
console.log(ship); */
// #endregion

// #region  //: - Властивість innerHTML
// Використовуй властивість element.innerHTML для додавання тільки у разі,
// — коли елемент element порожній або
// — якщо потрібно повністю замінити вміст element
// //; Читання
// //? Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, — це завжди валідний HTML-код.

// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// //; Зміна

// const title = document.querySelector('.article .title');
// title.innerHTML = 'New and <span style="color:red">Improved</span> title';

// //? Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту.

// const hangar = ['Dark S', 'Yellow Xwing', 'FighterJEt'];
// const list = document.querySelector('.list');

// const markup = hangar.map(ship => `<li"> ${ship} </li> <br/>`).join('');
// console.log(markup);

// list.innerHTML = markup;

//; нове значення

// const article = document.querySelector('.article');
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// article.innerHTML = htmlString;
// console.log(article);

// #endregion

// #region  //: - Метод insertAdjacentHTML()

// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед,
// після або всередину елемента. Він вирішує проблему innerHTML з повторною серіалізацією
// вмісту елемента під час додавання розмітки до вже існуючої.

//; element.insertAdjacentHTML(position, string)

// const list = document.querySelector('.list');

// const newTech = ['React', 'TypeScript', 'Node.js'];

// const markup = newTech
//   .map(tech => `<li class="list-item new">${tech}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);

// list.insertAdjacentHTML('beforebegin', '<h2>Popular tech</h2>');

// #endregion

//! 4 ------ Події -------

// #region  //: - Метод addEventListener()

//; element.addEventListener(event, handler, option)

//? event рядок, щом істить імя події наприклад "click"
//? handler коллбек функція яка буде викликана під час настання події
//? option необовязковий обєкт параметрів із розширеними параметрами

// На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу. Колбек-функції будуть викликатися в порядку їхньої реєстрації в коді.
//; 1

// const button = document.querySelector('.my-button');

// button.addEventListener('click', () => {
//   console.log('The button was pressed and now the next image will appear');
// });

// const handleClick = () => {
//   console.log(' Second message');
// };
// button.addEventListener('click', handleClick);

// #endregion

// #region  //: - Метод removeEventListener()

//; element.removeEventListener(event,handler,options)

// const addListener = document.querySelector('.js-add');
// const removeListener = document.querySelector('.js-remove');
// const btn = document.querySelector('.target-btn');

// const handleClick = () => {
//   console.log('event listener is here');
// };

// addListener.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('listener added');
// });

// removeListener.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('clicl event listener was removed');
// });
// #endregion

// #region  //: - Об'єкт події

// const button = document.querySelector('.btn');

// const handleClick = event => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener("click", handleClick)

// #endregion

// #region  //: - Події клавіатури

//? keydown - подія що відбуважться при натисканні клавіші
//? keyup - коли клавішу відпустили
//? події клавіатури відбувається на document.

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// document.addEventListener('keydown', event => {
//   console.log('Key', event.key);
//   console.log('KeyCode', event.code);
// });

//

// #endregion

//! 5 ------ Події елементів форм -------

// #region  //: - Подія submit
// //? відправлення форми відбувається при кліку на type="submit" або enter
// //? sumbit відбувається в tag - form

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   console.log('submit is pressed ', event.key);
// });

// //: відміна default значеннь

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log('Submit is pressed');
// });

//; 3
//? Подію submit можна застосувати для валідації (перевірки) форми перед відправленням, оскільки на об'єкті події існує багато корисних властивостей, пов'язаних з елементами форми.

/* const registerForm = document.querySelector('.form'); // знаходимо обєкт

registerForm.addEventListener('submit', handleSubmit); // додаємо слухача та функція

function handleSubmit(event) {
  // Функція знаходить значення форми інпутів
  event.preventDefault(); // видаляємо значення дефауот
  const form = event.target; // отримуємо доступ до данних
  const login = form.elements.login.value; // дістаємо значення логіну
  const password = form.elements.password.value; // дістаємо значення пароля

  if (login === '' || password === '') {
    return console.log('is empty');
  }
  console.log(`login is ${login}, pass is: ${password}`);

  form.reset(); */

// #endregion

// #region  //: - Подія change

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// select.addEventListener('change', setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
// #endregion

// #region  //: - Подія input

// Подія input відбувається тільки на текстових полях і textarea.
// Вона створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу.На
// практиці input — це найголовніша подія для роботи з текстовими полями форми.

// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
// });

//Порівняємо події input і change на текстових полях і textarea

//? Подія input:
// відбувається при кожній зміні значення (при введенні або видаленні)
// не залежить від втрати фокусу

//? Подія change:
// відбувається після втрати фокусу за умови, що відбулася зміна значення в елементі

// #endregion

// #region  //: - Подія focus і blur

//Під час втрати фокусу — перевірити введені дані.
// подія focus відбувається під час фокусування на елементі
// подія blur відбувається при втраті фокусу, наприклад, користувач клікає в іншому місці екрана

//? Фокус може бути тільки на одному елементі сторінки за одиницю часу. Поточний елемент, на якому знаходиться фокус, доступний як
// //; document.activeElement.

//- Більшість елементів не можуть отримати фокус. Наприклад, якщо клікнути по <div>,
//- то фокусування на ньому не відбудеться, тому що це не інтерактивний елемент.

// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'this inpu has focus';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });
// #endregion

// #region  //; - Задачі

// #endregion
