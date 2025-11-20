//; Module № 11. HTTP-запити і взаємодія з бекендом
import axios from 'axios';

//! 1 ------ Інтернет і протоколи -------

//! 2 ------HTTP запити -------
// #region  //: - Прикалди запитів

// ; Базове звернення

// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// ; foo 1 variant
// fetch('https://jsonplaceholder.typicode.com/comments?postId&name');

// function getId(x) {
//   fetch(`https://jsonplaceholder.typicode.com/comments?userId=${x}`);
// }

// getId(2);

// ; розбивання посилання на декілька сегментів
// function getCommemts(id) {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const endPoint = '/comments';
//   const params = new URLSearchParams({
//     id: id,
//     //* написано у вигляді обʼєкта. перетворюється на рядок
//     //* якщо обєжктів декілька то автоматично ставитьсяамперсант& між обʼєктами врядку
//     //; userId:1&userName:shoni
//   });

//   const url = `${baseUrl}${endPoint}?${params}`;

//   return fetch(url).then(res => res.json());
// }

// getCommemts(130).then(array => {
//   console.log(array);
// });
// ця функція повертає проміс тому це тепер проміс хначить діє then

// #endregion

// #region  //: - Перевірка відповіді

// - .json() - парсить відповідь JSON
// - .text() - парсить відповідь у вигляді тексту на приклад табличці дані .csv
// - .blob() - викор для обробки файлів зобр, аудіо,відео

// За замовчуванням fetch() не вважає HTTP-коди 404 чи 500 помилками. Тому потрібно вручну перевіряти статус відповіді та створювати помилку для обробки в catch().

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('HTTP error! Status: ${response.status}');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('отримані дані: ', data);
//   })
//   .catch(error => {
//     console.log('Помилка запиту:', error);
//   });

//   Чому це важливо?

// fetch() не відхиляє проміс при помилках сервера (наприклад, 404 або 500).
// Щоб виявити невдалий запит, потрібно вручну перевіряти response.ok.
// Якщо response.ok === false, необхідно викликати throw new Error(), щоб помилка оброблялася в catch().

// Такий підхід дозволяє коректно реагувати на помилки та уникати несподіваної поведінки в коді.

// #endregion

// #region  //: - HTTP-методи

// -  У REST API використовується кілька основних HTTP-методів для взаємодії з ресурсами:

// -  POST — створює новий ресурс.
// -  GET — отримує набір ресурсів або один ресурс.
// -  PUT — оновлює існуючий ресурс або створює новий.
// -  PATCH — частково оновлює існуючий ресурс.
// -  DELETE — видаляє ресурс.
// метод запиту задається чере ОБʼЄКТ налаштувань фкий передається другим аргументом у fetch()

// Важливі нюанси

// Якщо виконується GETзапит, вказувати method: "GET" не обов’язково, оскільки це значення за замовчуванням.
// Доступні HTTP-методи для кожного ресурсу описані у документації бекенду

// const options = {
//   method: 'GET',
// };

// fetch('https://jsonplaceholder.typicode.com/users', options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Дата');
//   })
//   .catch(error => {
//     console.log('Помилка');
//   });

// #endregion

// #region  //: - HTTP-заголовки

// Як передати заголовки у fetch()?
// Заголовки додаються у властивість headers об’єкта налаштувань:

// fetch('http://localhost:5173/partials/module-11.html', {
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Custom-Header': 'custom value',
//   },
// });

// fetch('https://jsonplaceholder.typicode.com/users', {
//   headers: {
//     Accept: 'application/json',
//   },
// }).then(response => {});
// #endregion

// #region  //: - Кросдоменні запити
// GET /users
// Host: my-api.com
// Origin: https://my-site.com

// #endregion

//! 3 ------ AJAX -------

// #region  //: - Оновлення інтерфейсу
// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(users => {
//       const markup = users
//         .map(user => {
//           return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join('');
//       userList.insertAdjacentHTML('beforeend', markup);
//     })
//     .catch(error => console.log(error));
// });

// ; 2

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUsers(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }
// #endregion

// #region  //: - Помилка новачка

//^ Висновок: дані з асинхронного запиту доступні тільки в then().
//^ Використовувати їх у синхронному коді поза then() – помилка. Це один з
//^ найважливіших принципів роботи з асинхронністю в JavaScript!

// let globalVar; // undefined

// 1. Виконуємо HTTP-запит
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     console.log('users inside then callback: ', users);

//     // Асинхронно записуємо результат запиту в зовнішню змінну
//     globalVar = users;

//     // Усередині колбека методу then усе добре
//     console.log('globalVar inside fetch callback: ', globalVar);
//   });

// // Зовні колбека методу then у синхронному
// // коді немає доступу до даних асинхронної відповіді бекенда
// // тому що цей код виконаєтся перед кодом в методі then
// console.log('globalVar outside fetch: ', globalVar); // undefined

// // ; Як правильно працювати з даними?

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(responde => responde.json())
//   .then(users => {
//     // Можемо використати тут
//     console.log('Отримані користувачіЮ', users);
//     // Або передати в ффункцію для обробки
//     renderUsers(users);
//   })
//   .catch(error => console.log('Помилка:', error));
// // Замість використання зовнішньої змінної, всі операції з отриманими даними потрібно виконувати всередині then():

// #endregion

// #region  //: - Параметри рядка запиту

// Параметри запиту дозволяють передавати на бекенд додаткові критерії для
// отримання потрібних даних.Вони можуть використовуватися для:

// Обмеження кількості результатів (наприклад, отримати лише 7 записів).
// Сортування за певною властивістю (наприклад, за іменем або датою).
// Фільтрації результатів за певними умовами.

//- Синтаксис параметрів у URL

//- Параметри додаються після ?.
//- Кожен параметр — це пара ключ=значення.
//- Кілька параметрів розділяються символом &.

// У документації JSONPlaceholder API вказано такі параметри:

//- _limit — обмежує кількість записів у відповіді.
//- _sort — сортує отримані дані за вказаним полем

https: fetch('https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name');

// #endregion

// #endregion

//! 4 ------ Бібліотека Axios -------

// #region  //: -
// Axios — це зручна альтернатива стандартному Fetch API.
// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //; - Задачі

// #endregion
