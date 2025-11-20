//; Module № 11. HTTP-запити і взаємодія з бекендом

//! 1 ------ Інтернет і протоколи -------

//! 2 ------HTTP запити -------

// #region  //: - Перевірка відповіді

// - .json() - парсить відповідь JSON
// - .text() - парсить відповідь у вигляді тексту на приклад табличці дані .csv
// - .blob() - викор для обробки файлів зобр, аудіо,відео

// За замовчуванням fetch() не вважає HTTP-коди 404 чи 500 помилками. Тому потрібно вручну перевіряти статус відповіді та створювати помилку для обробки в catch().

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! Status: ${response.status}');
    }
    return response.json();
  })
  .then(data => {
    console.log('отримані дані: ', data);
  })
  .catch(error => {
    console.log('Помилка запиту:', error);
  });

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
