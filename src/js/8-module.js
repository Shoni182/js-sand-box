//; Module № 8. Події та бібліотеки

//! 1 ------ Делегування подій  -------

// #region  //: - Поширення подій

/* const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  console.log('1 Parent');
});

child.addEventListener('click', () => {
  console.log('2 Child');
});

descendant.addEventListener('click', () => {
  console.log('3 Descendant');
}); */

// #endregion

// #region  //: - Цільовий елемент (event.target, event.currentTarget)

//; event.target
//; event.currentTarget

//? event.target  елемент який викликав подію наприклад клік
//? event.currentTarget це там де знаходиться listener

/* const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', event => {
  console.log('event.target: ', event.target);
  console.log('event.currrentTarget: ', event.currentTarget);
}); */

// #endregion

// #region  //: - Припинення спливання

//; event.stopPropagation()
//; event.stopImmediatePropagation()

/* const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  console.log('1 parent');

  alert(
    'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

child.addEventListener('click', () => {
  console.log('2 child');

  alert(
    'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

descendant.addEventListener('click', event => {
  event.stopPropagation();
  alert('Descendant click handler');
  console.log('3 descendant');
});
 */
// #endregion

// #region  //: - Делегування подій

//? 3 кроки реалізації деоегування подій
//? Визначити спільного предка групи елементів для відстеження подій
//? Зареєеструвати на елементі-предку обробник події яку ми хочемо відловлювати з групи елементів
//? В обробнику використовувати event.target для вибору цільового елемента, на якому відбувається подія

//; приклад
/* const box = document.querySelector('.box');

box.addEventListener('click', event => {
  console.log(event.target);
});
 */
// #endregion

// #region  //: - Перевірка цільового елемента події

/* //* пошук обєктів
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

//* слухач при кліку активується функція
colorPalette.addEventListener('click', selectColor);

//* ця функція активується при кліку яка
// перевіряє чи івент находиться на кнопці та присваює колір
// із дата сет колор який був створений до цього в createPaletteItems()
//
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return; // якщо імя тегу не баттон то припини
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

//* ця функція сразу викликається і енерує палети
// такоє активує іншу функцію getRandomHexColor() для тсворення рандомного кольору

createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

//*  для створення рандомного кольору
function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
} */

// #endregion

//! 2 ------  Бібліотеки -------

// #region  //^ - Бібліотеки

// #endregion

// #region  //^ - CDN (Content Delivery Network)

// #endregion

// #region  //: - Підключення бібліотеки
/* import * as basicLightbox from 'basiclightbox'; */

/* import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show(); */

// #endregion

//! 3 ------ Деструктуризація -------

// #region  //: - Навіщо потрібна деструктуризація?

/* const user = {
  name: 'Jacob',
  age: 32,
};

//? Без деструктиризації

console.log(user.name);
console.log(user.age);

//? із деструктиризацією
const { name, age } = user;

console.log(name);
console.log(age); */

// #endregion

// #region  //: - Деструктуризація об'єктів

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
 */
/* const accessType = book.isPublic ? 'pulbic' : 'private';
const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`; */

/* const { title, author, genres, isPublic, rating } = book;

const accessType = isPublic ? 'public' : 'private';
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access`;

console.log(message);
 */
// #endregion

// #region  //: - Деструктуризація неіснуючих властивостей

//? якщо в обєкті нема значення яке в казано підч ас дестрк то буде undefined тому потрібно ставити = чомусь

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
};

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  title,
  author,
  coverImage = 'https://via.placeholder.com/640/480', // тут додате зображення
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480" */

// #endregion

// #region  //: - Перейменування змінної

//^ Для цього пишемо:
//^ ім'я властивості, з якої хочемо отримати значення
//^ ставимо двокрапку :
//^ пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const { title, author: bookAuthor, isPublic, genres: allGenres, rating } = book;

console.log(title);
console.log(bookAuthor); // переіменовано
console.log(isPublic);
console.log(allGenres); // переіменовано
console.log(rating); */

// #endregion

// #region  //: - Значення за замовчуванням

//? При перейменуванні змінної, в яку ми розпаковуємо значення властивості об'єкта, також можна присвоїти значення за замовчуванням.

//; 1
/* const book = {
  title: 'The Last Kingdom',
  coverImage: ' - http old image', // якщо значення вже є то воно буде відображатися
};

const { title, coverImage: bookCoverImage = ' - http new image ' } = book;

console.log(title, bookCoverImage);
 */
//; 1.2

/* const book = {
  title: 'The Last Kingdom',
};

const { title, coverImage: bookCoverImage = ' - http new image ' } = book;

console.log(title, bookCoverImage); */

// #endregion

// #region  //: - Деструктуризація в циклах

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
];

//; старий приклад
/* for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
} */

//; новий

/* for (const book of books) {
  const { title, author, rating } = book; // зверни увагу тут один обкт Із масиву
  console.log(title);
  console.log(author);
  console.log(rating);
}
 */
//; якщо не багато властивостей то можна і коротше

/* for (const { title, author, rating } of books) {
  // тут вписуємо заміть book
  console.log(title);
  console.log(author);
  console.log(rating);
}
 */
// #endregion

// #region  //: - Деструктуризація параметрів

//; Без деструктуризації об'єкта:

/* function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
}

printUserInfo({
  name: 'Alice', age: 25, hobby: 'dancing'
}); */
// Name: Alice, Age: 25, Hobby: dancing

//; З деструктуризацією об'єкта в тілі функції:

/* function printUserInfo(user) {
  const { name, age, hobby } = user;
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
  name: 'Alice',
  age: 24,
  hobby: 'dancing',
}); */

//; Із деструктуризацією об'єкта в місці оголошення параметрів:

/* function printUserInfo({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
  name: 'Alice',
  age: 25,
  hobby: 'dancing',
}); */
// #endregion

// #region  //: - Патерн «Об'єкт параметрів»

//^ Якщо функція приймає більше 2-3 параметрів, дуже просто заплутатися, в якій послідовності і що передавати.

//; В результаті виходить дуже неочевидний код у місці її виклику.
/* function doStuffWithBook(title, pages, downloads, rating, isPublic) {
  // Робимо щось з параметрами
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// ❌ Що таке 736? Що таке 10283? Що таке true?
doStuffWithBook('The Last Kingdom', 736, 10283, 8.38, true); */

//; Патерн «Об'єкт параметрів» допомагає вирішити цю проблему.

/* function doStuffWithBook(book) {
  // Він заміняє набір параметрів всього одним — об'єктом з іменованими властивостями.
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.pages);
  // І так далі
}

// ✅ Все зрозуміло
doStuffWithBook({
  title: 'The Last Kingdom',
  pages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
}); */

//; Ще одна перевага в тому, що можна деструктуризувати об'єкт у параметрі book.

/* function doStuffWithBook(book) {
  const { title, pages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(pages);
} */

// ? Або в сигнатурі (підписі) функції — різниці немає.

/* function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
  console.log(title);
  console.log(pages);
}
 */
// #endregion

// #region  //: - Глибока деструктуризація

//^ Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності.
/* const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
}; */

//; Для початку напишемо код деструктуризації властивостей об'єкта користувача.
/* const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
}; */

/* const { name, tag, stats } = user;
console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(stats); // { followers: 5603, views: 4827, likes: 1308 } */

//; Тепер додамо глибоку деструктуризацію властивостей об'єкта stats.

/* const {
  name,
  tag,
  stats: { followers, views, likes },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(views); // 4827
console.log(likes); // 1308 */

//; Під час глибокої деструктуризації також можна змінювати імена змінних і присвоювати значення за замовчуванням, використовуючи вже знайомий тобі синтаксис.

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
  },
};

const {
  name,
  tag,
  stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827 //? нове
console.log(userLikes); // 0 //? нове видаив значення перед цим це як дефолтне

// #endregion

//! 4 ------   Деструктуризація масивів -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //; - Задачі

// #endregion
