//; Module № 10. Асинхронний JavaScript і проміси

// const { reject } = require('lodash');

//! 1 ------ Асинхронність -------

// #region  //: - Асинхронні операції

// console.log('First log');

// setTimeout(() => {
//   console.log('second log');
// }, 2000);

// console.log('Third log');

//; асинхоні методи це до браузера а не js . js це синхронний код він виконується стразу
// #endregion

// #region  //: - Тайм-аут

// const buttonTimeOut = document.querySelector('.btn');

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log('I love async JS');
//   }, 2000);

//   console.log(timerId);
// };

// buttonTimeOut.addEventListener('click', onClick);

// #endregion

// #region  //: - Скасування тайм-ауту

// ; 1
// const greet = () => {
//   console.log('Hello!');
// };

// const timerId = setTimeout(greet, 1000);

// clearTimeout(timerId);

// ; 2

// const setBtn = document.querySelector('.js-set');
// const clearBtn = document.querySelector('.js-clear');

// let timeOutId;

// setBtn.addEventListener('click', () => {
//   timeOutId = setTimeout(() => {
//     console.log('Timeout is on');
//   }, 1000);
// });

// clearBtn.addEventListener('click', () => {
//   clearTimeout(timeOutId);
//   console.log(`Timeout with ${timeOutId}`);
// });

// #endregion

// #region  //: - Інтервал

// const startBtn = document.querySelector('.js-start');

// startBtn.addEventListener('click', () => {
//   const intervalId = setInterval(() => {
//     console.log(`Interval ID : ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// #endregion

// #region  //: - Скасування інтервалу

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let intervalId = null;

// startBtn.addEventListener('click', () => {
//   intervalId = setInterval(() => {
//     console.log(`ID:${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(intervalId);
//   console.log(`stopped ID${intervalId}`);
// });

// #endregion

//! 2 ------ Дата і час -------

// #region  //: - Створення дати

// const date = new Date();

// console.log(date);

// #endregion

// #region  //: - Встановлення дати

// const date = new Date('2030-03-16');
// const date = new Date('2030-03-16T14:25:00');
// const date = new Date('2030');
// const date = new Date('2030-30');
// const date = new Date('2030-03-16');

// const date = new Date(2030, 2, 16, 13, 26, 0, 0);
// console.log(date);

// #endregion

// #region  //: - Unix час

// console.log(new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)
// console.log(new Date(15000000)); //Thu Jan 01 1970 07:10:00 GMT+0300 (за східноєвропейським стандартним часом)

// const date = new Date();

// console.log(date.getTime());

// #endregion

// #region  //: - Метод Date.now()

// const time = Date.now();
// console.log(time);

// виміруємо скільки часу займає виконання коду

// //^ Зберегти час ДО події
// const startTime = Date.now();

// //^ цикл який заберає час на виконання
// for (let i = 0; i <= 10000; i += 1) {
//   console.log(i);
// }
// //^ Зберенти час пілся події
// const endTime = Date.now();
// //^ порахувати різницю між першим да другим зебережим часом
// const elapsedTime = endTime - startTime;
// console.log(`elapsedTime: ${elapsedTime}ms`);

// #endregion

// #region  //: - Геттери і сеттери

//; Прочитати час
// const date = new Date();

// console.log('Date: ', date.getDate());
// console.log('Day of the week: ', date.getDay());
// console.log('Month', date.getMonth());
// console.log('Full year', date.getFullYear());

// // Повертає години
// console.log('Hours: ', date.getHours());

// // Повертає хвилини
// console.log('Minutes: ', date.getMinutes());

// // Повертає секунди
// console.log('Seconds: ', date.getSeconds());
// // Повертає мілісекунди
// console.log('Milliseconds: ', date.getMilliseconds());

//; Записати час

// const date = new Date('March 16, 2030 14:23:00');
// date.setMinutes(50);
// console.log(date);

// date.setFullYear(2050);
// console.log(date);

// #endregion

//! 3 ------ Проміси -------

// #region  //: - Створення проміса

//; 1
// const promise = new Promise((resolve, reject) => {});

//; 2

// const isSuccsess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccsess) {
//       resolve('succsess! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

//; 3

// const isSuccsess2 = true;

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccsess2) {
//       resolve('+');
//     } else {
//       reject('-');
//     }
//   }, 3000);
// });

// console.log(promise2);

//; 4

// let condition;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isCondition) {
//       resolve ("asdasd")
//     } else {
//         reject
//     }
//   }, 2000);
// });

// #endregion

// #region  //: - Метод then()
// const isSuccsess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccsess) {
//       resolve('succsess! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise.then(
//   value => {
//     console.log(value);
//   },

//   error => {
//     console.log(error);
//   }
// );

// console.log(promise);

//^ Якщо функції onResolve і onReject містять складну логіку, їх для зручності оголошують як зовнішні функції і передають у метод then() за ім'ям.

// #endregion

// #region  //: - Метод catch()

//; 1
// promise
//   .then(value => {
//     // promise fulfilled
//   })
//   .catch(error => {
//     //Promise rejected
//   });

//; 2
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Create promise

//; 3

// const isRegistered = true;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isRegistered) {
//       resolve('Registered');
//     } else {
//       reject('Not registered');
//     }
//   }, 2000);
// });

// #endregion

// #region  //: - Метод finally()
//Цей метод може бути корисним, якщо необхідно виконати код після того, як проміс буде виконаний незалежно від результату (fulfilled або rejected).

//; 1
// promise
//   .then(value => {
//     // Fulfilled
//   })
//   .catch(error => {
//     // rejected
//   })
//   .finally(() => {
//     // promise fullfiled or rejected
//   });

//; 2

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Resolved');
//     } else {
//       reject('rejected');
//     }
//   }, 3000);
// });

// promise
//   .then(value => console.log(value))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Always work'));
// #endregion

//; #region Задачки

//: ✅ Завдання 1: Проміс, що виконується через 1 секунду

// Створи проміс, який через 1 секунду поверне текст:

// let isTimer = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isTimer === true) {
//       resolve('Done');
//     } else {
//       reject('timer is of');
//     }
//   }, 1000);
// });

//: ✅ Завдання 2: Проміс, що інколи виконується, а інколи відхиляється
// Створи проміс, який:
// з імовірністю 50% виконується (resolve("Success"))
// з імовірністю 50% відхиляється (reject("Error"))
// Очікуваний результат:
// При запуску інколи then, інколи catch.

//:
// let isTimer = null;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isTimer = Math.random() < 0.5;
//     if (isTimer) {
//       resolve('Is True');
//     } else {
//       reject('False');
//     }
//   }, Math.random() * (3000 - 1000) + 1000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//; 3

//: ✅ Завдання 3: Ланцюжок промісів
// Створи проміс, який повертає число 5.
// Потім у then:
// помнож це число на 2 → 10
// додай 3 → 13
// виведи результат

// :

// const promise = new Promise(resolve => {
//   resolve(5);
// });

// promise
//   .then(value => {
//     console.log(value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value + 3;
//   })
//   .then(value => {
//     console.log(value);
//   });

//: ✅ Завдання 4: Promise.all
// Є 3 проміси, кожен виконується через різний час:
// 1-й — через 500 мс
// 2-й — через 1000 мс
// 3-й — через 1500 мс
// Всі повертають свої номери (1, 2, 3).
// Створи Promise.all і отримай масив [1, 2, 3].

// :
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('1 - перший');
//   }, 500);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('2 - другий');
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('3 - третій');
//   }, 1500);
// });

// p1.then(value => console.log(value)).catch(error => console.log(error));
// p2.then(value => console.log(value)).catch(error => console.log(error));
// p3.then(value => console.log(value)).catch(error => console.log(error));

//: ✅ Завдання 5: Помилка у середині ланцюжка
// Створи:
// проміс, який повертає "Start"
// наступний then кидає помилку (throw new Error("Fail"))
// catch ловить помилку й виводить "Caught!"
// :

// const promise = new Promise((resolve, reject) => {
//   resolve('Start');
// });
// #endregion

//! 4 ------ Промісифікація -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

//! 5 ------ Обробка множинних промісів -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //; - Задачі

//: Задача 1 — Написати проміс, який резолвиться через 1 секунду

// Завдання:
// Створи проміс, який через 1 секунду повертає текст "Done in 1s".

// TODO: створити проміс, який через 1000ms робить resolve("Done in 1s")

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve;
//     console.log('Done!');
//   }, 1000);
// });

//: Задача 2 — Проміс із випадковим результатом
// Завдання:
// Є 50/50 шанс успіху.
// Через 2s повинно повернути:

// resolve("OK")

// або reject("Fail")

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const isOk = Math.random() > 0.5;
//     if (isOk) {
//       res('Ok');
//     } else {
//       rej('Fail');
//     }
//   }, 1000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(value => {
//     console.log(value);
//   });

// #region — Створення проміса

//: Задача 3 — Проміс залежний від змінної
// TODO: якщо isOnline → resolve("Online"), якщо false → reject("Offline")
// const isOnline = true;
// const checkOnline = new Promise((resolve, reject) => {
//   if (isOnline) {
//     resolve('online');
//   } else {
//     reject('false');
//   }
// });

// checkOnline
//   .then(value => {
//     console.log(value);
//   })
//   .catch(value => {
//     console.log(value);
//   });
//: Задача 4 — Логічна помилка
// TODO: виправ isCondition → condition і додай reject повідомлення
// let condition = false;
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (condition) {
//       resolve('OK');
//     } else {
//       reject('False');
//     }
//   }, 600);
// });

// promise4
//   .then(value => {
//     console.log(value);
//   })
//   .catch(value => {
//     console.log(value);
//   });

// #endregion

// #region — Метод then()

//: Задача 5 — Вивести результат виконання проміса
// const promise5 = new Promise(resolve => {
//   setTimeout(() => resolve('Loaded'), 1500);
// });

// promise5.then(value => {
//   console.log(value);
// });

// TODO: додай then, щоб вивести Loaded

//: Задача 6 — Виділити функції в окремі onResolve/onReject
// const isSuccess6 = true;
// const promise6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isSuccess6 ? resolve('Success!') : reject('Error!');
//   }, 1000);
// });

// function onResolve(value) {
//   console.log('Resolved: ', value);
// }
// function onReject(value) {
//   console.log('Rejected: ', value);
// }

// promise6.then(onResolve).catch(onReject);

// TODO: винести колбеки в окремі функції onResolve та onReject
// promise6.then();

//: Задача 6.2— Імітація завантаження файлу

// Створи проміс, який симулює завантаження файлу з випадковою тривалістю (1–4 секунди).
// Проміс повинен зарезолвитись або зареджектитись з 50% шансом.

// Вимоги:
// окрема функція downloadFile(filename)
// окремі onResolve та onReject
// результат:

// function downloadFile(filename) {
//   return filename;
// }

// function onResolve(filename) {
//   console.log(`✔ Файл ${filename} успішно завантажено`);
// }

// function onReject(filename) {
//   console.log(`❌ Помилка: файл ${filename} не вдалося завантажити`);
// }

// const randomTime = Math.round(Math.random() * 1500 + 500);
// const isDownloaded = Math.random() > 0.5;

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (isDownloaded) {
//       res(downloadFile('File01'));
//     } else {
//       rej(downloadFile('File01'));
//     }
//   }, randomTime);
// });

// promise.then(onResolve).catch(onReject);

// ✔ якщо успіх → "Файл filename успішно завантажено"

// ❌ якщо помилка → "Помилка: файл filename не вдалося завантажити"

//: ✅ Задача 6.3 — Перевірка інтернет-з'єднання
// Створи проміс, який імітує перевірку інтернету.
// Через випадкові 1–3 секунди проміс має:
//   • resolve → "Інтернет стабільний"
//   • reject  → "Інтернет відсутній"
// Вимоги:
//   • функція checkConnection()
//   • окремі колбеки onResolve і onReject
//   • виконати три окремі перевірки підряд (3 проміси)

// function checkConnection() {
//   return Boolean(Math.random() > 0.5);
// }

// function onResolve(status) {
//   console.log(
//     `internet status is ${status ? 'Connected' : 'Disconnected'} ✅ `
//   );
// }

// function onReject(status) {
//   console.log(
//     `internet connection is ${status ? 'Connected' : 'Disconnected'} ❌ `
//   );
// }

// const delay = Math.round(Math.random() * 1000 + 100);

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const isStatus = checkConnection();
//     if (isStatus) {
//       res(isStatus);
//     } else {
//       rej(isStatus);
//     }
//   }, delay);
// });

// promise.then(onResolve).catch(onReject);

//: ✅ Задача 6.4 — Симуляція API-запиту
// Створи проміс, який повертає "дані з сервера" через 2 секунди.
// Правила:
//   • якщо shouldFail === true  → reject("Сервер недоступний")
//   • якщо shouldFail === false → resolve({ name: "Shoni", age: 21 })
// Вимоги:
//   • функція fetchUser(shouldFail)
//   • окремі колбеки: handleSuccess, handleError
//   • успішний resolve повертає об’єкт користувача
//   • reject повертає строку з помилкою

// function fetchUser() {
//   return Boolean(Math.random() > 0.5);
// }

// function handleSuccess(value) {
//   console.log(value);
// }

// function handleError(error) {
//   console.log(error);
// }

// const promise = new Promise((res, rej) => {
//   const isShouldFail = fetchUser();

//   setTimeout(() => {
//     if (!isShouldFail) {
//       res({
//         name: 'Shoni's,
//         age: 21,
//       });
//     } else {
//       rej('Сервер недоступний');
//     }
//   }, 2000);
// });

// promise.then(handleSuccess).catch(handleError);

//: ✅ Задача 6.5 — Перевірка статусу оплати
// Створи проміс, який імітує перевірку оплати товару.
// Через випадкові 1–2 секунди:
//    • resolve → "Оплату підтверджено"
//    • reject  → "Платіж відхилено"
// Вимоги:
//    • функція checkPayment()
//    • окремі колбеки: onResolve, onReject
//    • запускається одна перевірка

// function checkPayment() {
//   return Boolean(Math.random() > 0.5);
// }

// function onResolve(value) {
//   console.log(value);
// }

// function onReject(value) {
//   console.log(value);
// }

// const randomTime = Math.random() * 2000 + 1000;

// const promise = new Promise((res, rej) => {
//   const isPayd = checkPayment();
//   setTimeout(() => {
//     if (isPayd) {
//       res('Оплату підтверджено');
//     } else {
//       rej('Платіж відхилено');
//     }
//   }, randomTime);
// });

// promise.then(onResolve).catch(onReject);

//: ✅ Задача 6.6 — Завантаження картинки
// Створи проміс, який імітує завантаження зображення на сервер.
// Через 1 секунду проміс повертає:
//    • resolve → `{ url: "https://image.com/photo01.png" }`
//    • reject  → "Помилка завантаження"
// Вимоги:
//    • функція uploadImage()
//    • окремі: handleSuccess, handleFailure
//    • логіка shouldUpload = Math.random() > 0.3

// function uploadImage(data) {
//   console.log('Завантажено зображення', data.url);
// }
// const shouldUpload = Math.random() > 0.3;

// function handleSuccess(data) {
//   uploadImage(data);
// }
// function handleFailure(error) {
//   console.log(error);
// }

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (shouldUpload) {
//       res({ url: 'https://image.com/photo01.png' });
//     } else {
//       rej('Помилка завантаження');
//     }
//   }, 1000);
// });

// promise.then(handleSuccess).catch(handleFailure);

//: ✅ Задача 6.7 — Перевірка логіну користувача
// Створи проміс, який перевіряє логін користувача.
// Якщо login === "admin" і password === "12345"
//    → resolve("Авторизація успішна")
// Інакше
//    → reject("Невірний логін або пароль")
// Вимоги:
//    • функція loginUser(login, password)
//    • окремі колбеки: onSuccess, onError
//    • протестувати 2 виклики: правильні дані і неправильні

// const login = prompt('Введіть логін');

// const password = prompt('Введіть пароль');

// function loginUser(login, password) {
//   return Boolean(login === 'admin' && password === '12345');
// }
// const loginStatus = loginUser(login, password);

// function onSuccess(user) {
//   console.log(user);
// }

// function onError(error) {
//   console.log(error);
// }

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (loginStatus) {
//       res('Авторизація успішна');
//     } else {
//       rej('Невірний логін або пароль');
//     }
//   }, 1000);
// });

// promise.then(onSuccess).catch(onError);

//: Задача 7.1 — Ланцюжок then()
// TODO: проміс повертає 5 → додати 3 → помножити на 2 → вивести результат 16
// const promise7 = new Promise(resolve => resolve(5));

// const promise = new Promise(res => {
//   res(5);
// })

//   .then(value => {
//     console.log('Крок 1:', value);
//     return value + 3;
//   })
//   .then(value => {
//     console.log('Крок 2:', value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log('Result:', value);
//   });

//: Задача 7.2 — Ланцюжок then() з асинхронними паузами
// TODO: проміс повертає 10 → через 500ms додати +5 → через 700ms помножити на 3 → через 300ms відняти 4 → вивести результат

// const promise = new Promise(res => {
//   setTimeout(() => {
//     res(10);
//   }, 500);
// })
//   .then(value => {
//     return new Promise(res => {
//       setTimeout(() => {
//         console.log(value);

//         res(value + 5);
//       }, 700);
//     });
//   })
//   .then(value => {
//     return new Promise(res => {
//       console.log(value);

//       setTimeout(() => {
//         res(value * 3);
//       }, 300);
//     });
//   })
//   .then(value => {
//     return new Promise(res => {
//       console.log(value);

//       setTimeout(() => {
//         res(value - 4);
//       }, 300);
//     });
//   })
//   .then(finalValue => {
//     console.log(finalValue);
//   });

// (value => {
//   console.log('res 1', value);
//   return value + 5;
// })
// .then(value => {
//   console.log('res 2', value);
//   return value * 3;
// })
// .then(value => {
//   console.log('res 3', value);
//   return value - 4;
// })
// .then(value => {
//   console.log('result', value);
// });

//: Задача 7.3 — Обробка рядка в ланцюжку then()
// TODO: проміс повертає "hello" → зробити першу літеру великою → додати " World" → перевернути строку → вивести результат

// function capFirstLetter(name) {
//   return name[0].toUpperCase() + name.slice(1);
// }

// const promise = new Promise(res => {
//   setTimeout(() => {
//     res('hello');
//   }, 1000);
// })
//   .then(value => {
//     return new Promise(res => {
//       const capName = capFirstLetter(value);
//       setTimeout(() => {
//         console.log(capName);

//         res(capName);
//       }, 1000);
//     });
//   })
//   .then(value => {
//     return new Promise(res => {
//       setTimeout(() => {
//         res(value + ' Word');
//       }, 1000);
//     });
//   })
//   .then(value => {
//     console.log(value);
//   });

//: Задача 7.4 — Робота з об’єктом у ланцюжку then()
// TODO: проміс повертає { id: 1, name: "Shoni", age: 21 } → взяти тільки name → зробити великими літерами → повернути "USER: SHONI" → вивести у консоль

// function getUser(value) {
//   return value.name.toUpperCase();
// }

// const promise = new Promise(res => {
//   setTimeout(() => {
//     res({ id: 1, name: 'shoni', age: 21 });
//   }, 1000);
// })
//   .then(value => {
//     return new Promise(res => {
//       const name = getUser(value);
//       setTimeout(() => {
//         res(name);
//       }, 1000);
//     });
//   })
//   .then(value => {
//     return new Promise(res => {
//       setTimeout(() => {
//         res(`USER: ${value}`);
//       }, 1000);
//     });
//   })
//   .then(value => {
//     console.log(value);
//   });

//: Задача 7.4

// function getUser(value) {
//   return value.name.toUpperCase();
// }

// //^ функція для визначення часу
// function wait(ms, value) {
//   return new Promise(res => setTimeout(() => res(value), ms));
// }

// const promise = new Promise(res => {
//   setTimeout(() => {
//     res({ id: 1, name: 'shoni', age: 21 });
//   }, 1000);
// })
//   .then(user => wait(1000, getUser(user)))
//   .then(name => wait(1000, `USER: ${name}`))
//   .then(result => console.log(result));

//- 🧠 Чому так можна?

//- Якщо ти повертаєш НЕ проміс, а просто значення —
//- .then() автоматично загортає це значення у проміс.

//- Тобто це:

//- .then(user => getUser(user))
//- працює так само, як:

//- .then(user => Promise.resolve(getUser(user)))

// #endregion

//; #region — Метод catch()

//: Задача 8 — Обробити помилку
// const promise8 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Something went wrong!'), 1000);
// }).catch(error => {
//   console.log(error);
// });
// TODO: додай catch щоб вивести помилку

//: Задача 9 — Виправ isRegistered, якщо false → catch
// const isRegistered9 = false;
// const promise9 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isRegistered9) {
//       resolve('Registered');
//     } else {
//       reject('Not registered');
//     }
//   }, 2000);
// })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// TODO: додай then + catch

//: Задача 10 — Помилка в ланцюжку then()
// TODO: всередині then зроби помилку і перехопи її у catch
// const promise10 = Promise.resolve('Start')
//   .then(error => {
//     return Promise.reject('Error');
//   })
//   .catch(error => {
//     console.log(error);
//   });

//; #region — Метод finally()

//: Задача 11 — Використати finally()
// TODO: після then або catch має виконати finally
// const promise11 = new Promise(resolve => {
//   setTimeout(() => resolve('OK'), 1000);
// })
//   .then(value => {
//     return Promise.reject('error');
//   })
//   .catch(error => {
//     console.log('error cathced');
//   })
//   .finally(() => {
//     console.log('all');
//   });

//: Задача 12 — finally при помилці
// const promise12 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Fail'), 1500);
// })
//   .catch(error => {
//     console.log(`catch message ${error}`);
//   })
//   .finally(() => {
//     console.log(`final message: promise is finished`);
//   });
// TODO: додай catch + finally

// #endregion

// #endregion
