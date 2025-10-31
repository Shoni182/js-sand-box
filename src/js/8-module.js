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
/* 
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// для створення кнопок і привязка кольорів

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

//  для створення рандомного кольору
function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
 */
// #endregion

//! 2 ------  Бібліотеки -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

//! 3 ------ Деструктуризація -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

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
//! 5 ------ -------
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
