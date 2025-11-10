//; Module №  9. Модульність коду і bundler Vite
import validator from 'validator';
//! 1 ------ Формат JSON -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

//! 2 ------  Вебсховище -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: - Додавання даних localStorage

//- запис
//; console.log(localStorage.setItem('key', 'value'));

//-  показати значення
// console.log(localStorage);

// #endregion

// #region  //: - Додавання складних даних

// для того щоб зберегти щось окрім рядка наприклад обʼєкт або масив
// то використовують
// ; JSON.stringify

// const settings = {
//   theme: 'dark',
//   isAuthenricated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));
// console.log(localStorage);

// #endregion

// #region  //: - Отримання даних

// const saveTheme = localStorage.setItem('ui-theme', 'yellow');

// const savedTheme = localStorage.getItem('ui-theme');

// console.log(savedTheme);

// //; 2 якщо нема то буде null

// const savedItem = localStorage.getItem('key-that-does-not-exist');
// console.log(savedItem);

//; 3 JSON.parse()

/* const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage.getItem('settings');
console.log(savedSettings);

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);
 */
// #endregion

// #region  //: - Видалення данних

//; 1 removeItem()
// localStorage.setItem('ui-theme', 'dark');
// console.log(localStorage.getItem('ui-theme'));

// localStorage.removeItem('ui-theme');
// console.log(localStorage.getItem('ui-theme'));

//; 2 clear()

// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('notif-level', 'mute');

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// localStorage.clear();

// #endregion

// #region  //: - sessionStorage
// console.log(window.sessionStorage);

//- записування рядків
// setItem(key, value);

// sessionStorage.setItem('user-id', 'Indetificator 41502321');

// sessionStorage.setItem(
//   'tickets',
//   JSON.stringify({ from: 'Uzhgorod', to: 'Lviv', quantity: 2 })
// );

// console.log(sessionStorage);

// //- зчитування

// const userId = sessionStorage.getItem('user-id');
// console.log(userId);

// const ticket = JSON.parse(sessionStorage.getItem('tickets'));
// console.log(ticket);

// //- видалення

// sessionStorage.removeItem('tickets');

// console.log(sessionStorage);

// sessionStorage.clear();
// console.log(sessionStorage);

// #endregion

// #region  //: - Кейс: Форма з повідомленням

// //  1 Знаходження форми
// const form = document.querySelector('.feedback-form');
// // привязка до текстареа повідомлення, так як це обʼєжк то звеотаємл до ЕЛЕММЕНТА name="message"
// // який є в HTML  <textarea name="message"></textarea>
// const textarea = form.elements.message;
// // запис до значення повідомлення для запису в памяті
// const localStorageKey = 'Storege Key ';

// //
// textarea.value = localStorage.getItem(localStorageKey) ?? '';

// // случач на інпут, коли прописуємо текст то працює функція яка в ключ записує новий текст велйю
// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// // при натисканні цде зброз базовиї настройок
// form.addEventListener('submit', evt => {
//   evt.preventDefault();

//   //   виводиться плсилання на текст  серез лог
//   console.log(evt.target.elements.message.value + '- MESSAGE');
//   // при сабміті видалається ключ
//   localStorage.removeItem(localStorageKey);
//   // скидується форма
//   form.reset();
// });

// 1.

// #endregion

//! 3 ------ Інструменти веброзробки -------

// #region  //: -

// #endregion

// #region  //: -

// console.log(
//   'Is mango@mail.com a valid email?: ',
//   validator.isEmail('mango@mail.com')
// ); // Is mango@mail.com a valid email?: true

// console.log(
//   'Is Mangodogmail.com a valid email?: ',
//   validator.isEmail('Mangodogmail.com')
// ); // Is mango@mail.com a valid email?: false

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// console.log(foo(10, 25), foo(100, 20));
//! 4 ------ -------

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
// зробити задачку по автомобіляї або іншу але созранити данні в локал сторадж  використати функції

// save   load
// #endregion
