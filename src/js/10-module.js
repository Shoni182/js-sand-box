//; Module № 10. Асинхронний JavaScript і проміси

//! 1 ------ Асинхронність -------

// #region  //: - Асинхронні операції

// console.log('First log');

// setTimeout(() => {
//   console.log('second log');
// }, 2000);

// console.log('Third log');

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

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

//! 3 ------ -------

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

// #region  //: -

// #endregion

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

// #endregion
