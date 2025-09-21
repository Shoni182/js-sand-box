//;  MODULE 2 Java Script

//! --- Розгалуження =============================

// #region //: - Інструкція if

/* function getPrice(subscription) {
  let price = 0;

  if (subscription === 'pro') {
    price = '100$';
  }

  return price;
}
console.log(getPrice('free'));
console.log(getPrice('pro'));
 */

// Приклад

/* function budget(salary, expences) {
  budget = salary - expences;

  if (budget <= 100) {
    return 'Економ гроші! ';
  } else {
    return 'Можеш тринькати!';
  }
}

console.log(budget(500, 20)); */

// #endregion

// #region //: - Інструкція if...else

/* function checkStorage(available, ordered) {
  if (available >= ordered) {
    return 'Order is processed, our manager will contact you';
  } else {
    return 'Not enough goods in stock!';
  }
}
console.log(checkStorage(100, 150));

////////
 */
// #endregion

// #region //: - Блок else...if
/* function checkStorage(available, ordered) {
  if (ordered == 0) {
    return 'There are no products in the order!';
  } else if (available < ordered) {
    return 'Your order is too large, there are not enough items in stock!';
  } else {
    return 'The order is accepted, our manager will contact you';
  }
}

console.log(checkStorage(20, 20)); */
// #endregion

// #region //: - Тернарний оператор - ? -

/* const age = 45;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); */

//
//
//

/* function age(age) {
  return age >= 18 ? 'adult' : 'child';
}
console.log(age(55)); */

//
//
//

/* function numberSize(a, b) {
  return a > b ? 'Haha YEES!' : 'what? NOOO!';
}

console.log(numberSize(100, 2000)); */

//
//
//

/* function letterLength(a, b) {
  a = a.length;
  b = b.length;

  if (a > b) {
    return 'Haha my BIGER!! ';
  } else {
    return ' NOOOO! ';
  }
}

console.log(letterLength('123456', '123')); */

//
//
//

// #endregion

// #region //: - Оператор switch and Brake
//
// Оператор - switch перевіряє тільки на сувору рівність

/* function dayTime(day) {
  switch (day) {
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;

    case 3:
      return 'Wednesday';
      break;

    case 4:
      return 'Thursday';
      break;

    case 5:
      return 'Friday';
      break;
    default:
      return 'Weekend';
  }
}
console.log(dayTime(3)); */

// #endregion

// #region //; - Задачі

/* //; Задача-1
Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye". */

/* function security(age, balance) {
  if (age >= 18 && balance >= 100) {
    return "Wellcome";
  } else {
    return "Goodbye"
  }
}
console.log(security(18, 100)) */

//? end
/* //; Задача-2
Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого*/

//: 1
/* function buy(amount, price) {
  price = amount *= price; 
  if (price <= 1000 && amount > 0) { 
    return "Ми це купуємо"
  } else  if (amount === 0) {
    return "Корзина пуста!"
  } else {
  return "Це занадто дорого"
  }
} */
/* console.log(buy(100,10)) */

//: 2
/* function buy(amount, price) {
  price = amount *= price;
  return price <= 1000 ? 'Ми це купуємо' : 'Це занадто дорого';
}
console.log(buy(100, 50)); */

//? end

/* //; Задача-3
Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно". */

/* function tempFoo(temp) {
  temp = parseInt(temp);
  if (temp <= 0) {
    return 'Замерзає';
  } else if (temp > 0 && temp <= 25) {
    return 'Нормальна температура';
  } else if (temp > 25) {
    return 'Спекотно';
  } else {
    return 'Вкажіть температуру';
  }
}
console.log(tempFoo('')); */

//? end

/* //; Задача-4
Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться". */

/* function isDivide(number, divisor) {
  if (number % divisor === 0) {
    return 'Ділиться';
  } else {
    return 'Не ділиться';
  }
}
console.log(isDivide(10, 5)); */

//? end

/* //; Задача-5
Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу". */

//: 1

/* function weather(isRaining, hasUmbrella) {
  if (isRaining && hasUmbrella) {
    return 'Не змокнеш';
  } else if (isRaining || hasUmbrella) {
    return 'Змокнеш';
  } else {
    return 'Без дощу';
  }
}
console.log(weather(0, 0)); */

//: 2

/* function weather(isRaining, hasUmbrella) {
  if (isRaining && hasUmbrella) {
    return 'Не змокнеш';
  } else if (isRaining) {
    return 'Змокнеш';
  } else {
    return 'Без дощу';
  }
}
console.log(weather(0, 1));
 */
//? end

/* //; Задача-6
Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно". */

/* function isGrade(grade) {
  if (grade >= 90 && grade < 100) {
    return 'Відмінно';
  } else if (grade >= 75 && grade < 89) {
    return 'Добре';
  } else if (grade >= 50 && grade < 74) {
    return 'Задовільно';
  } else if (grade < 50 && grade > 0) {
    return 'Незадовільно';
  } else {
    return 'це не оцінка';
  }
}
console.log(isGrade()); */
//? end

/* //; Задача-7
Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день". */

/* function isDay(dayOfWeek, isHoliday) {
  if (dayOfWeek == 'Saturday' || dayOfWeek == 'Sunday' || isHoliday == true) {
    return 'Вихідний';
  } else {
    return 'Робочий день';
  }
}
console.log(isDay('', 0));
 */
//? end
/* //; Задача-8
Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік". */

//? end
/* //; Задача-9
Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено". */

//? end
/* //; Задача-10
Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер". */

//? end

// #endregion

//! --- Логічні Оператори ==========================

// #region //: - Перетворення типів:

// те що False
// Numbers
/* console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
// String
console.log(Boolean(''));
//
console.log('');
// те що True
// all Numbers and not empty string
console.log(Boolean(2));
console.log(Boolean(-100));
console.log(Boolean('hello'));
 */
// #endregion

// #region //: - Логічна «і» (and) - &&

/* function screenWidth(width) {
  const mobile = 320;
  const tablet = 768;
  const desktop = 1200;

  if (width <= mobile) {
    return 'Mobile screen';
  } else if (width > mobile && width <= tablet) {
    return 'Tablet screen';
  } else if (width > tablet && width <= desktop) {
    return 'Desktop sceen';
  } else {
    return 'Godzilla screen';
  }
}
console.log(screenWidth(700)); */

//
//
// Це дуже ускладнив
/* function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}
console.log(isNumberInRange(4, 50, 2));
 */
// #endregion

// #region //: - Логічне «Або» - ||
//
/* 
function screen(a) {
  const mobile = 320;
  const tablet = 768;
  if (a <= mobile || a > tablet) {
    return 'Mobile or desktop screen';
  }
}
console.log(screen()); */

//
//
//

/* function checkAccess(subType) {
  return subType === 'pro' || subType === 'vip';
}
console.log(checkAccess('pr')); */

// #endregion

// #region //: - Логічне «Ні» - !

/* function canChat(a) {
  const isBlocked = false;
  const canChat = isBlocked;
  if (canChat) {
    return `${a} - This message witouth tarrif!`;
  } else {
    return `${a} ???! - Pay fkn money !!!! `;
  }
}

console.log(canChat('hero everynyan')); */

//
//
//

// #endregion

// #region //; Задачі

// #endregion

//! --- Методи рядків ============================

// #region //: - Метод slice()
//* str.slice(startIndex, endIndex)
//* де:
//* str — вихідний рядок, з якого робитиметься копія.
//* startIndex — індекс, з якого починається копіювання елементів рядка.
//* endIndex — індекс, до якого (не включаючи) йде копіювання елементів рядка.

/* function getSubstring(string, length) {
  return string.slice(0, length);
}

console.log(getSubstring('Hello world', 3)); */

// #endregion

// #region //: - Методи toLowerCase() і toUpperCase()

//: 1

/* function checkForName(fullName, firstName) {
  fullName = fullName.toLowerCase();
  firstName = firstName.toLowerCase();
  if (fullName.includes(firstName)) {
    return true;
  } else {
    return false;
  }
} */

//: 2

// #endregion

// #region //: - Метод includes()

// #endregion

// #region //: - Методи startsWith() і endsWith()

// #endregion

// #region //: - Метод indexOf()

//: 1

/* function getFileName(file) {
  if (file.includes('.')) {
    let index = file.indexOf('.');
    file = file.slice(0, index);
    return file;
  } else {
    return file;
  }
}

console.log(getFileName('style.css')); */

//: 2

// #endregion

// #region //: - Метод trim()

//: 1

/* function createFileName(name, ext) {
  trimedName = name.trim();
  trimedExt = ext.trim();
  return `${trimedName}.${trimedExt}`;
} */

// #endregion

// #region //; Задачі

// #endregion

//! --- Цикли ============================

// #region //: - Цикл while

//; Задача 1
/* function calculateTotal(number) {
  let i = 0;
  let sum = 0;
  while (i < number) {
    i += 1;
    sum += i;
  }
  return sum;
}
console.log(calculateTotal(3)); */

// #endregion

// #region //: - Цикл do…while

//; Приклад

/* let count = 0;

do {
  console.log(`Count: ${count}`);
  count += 1;
} while (count < 5); */

// #endregion

// #region //: - Цикл for

//; Приклад
/* function sumUpTo(number) {
  let sum = 0;

  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }

  return sum;
}

console.log(sumUpTo(3)); */

// #endregion

// #region //: - Інкремент ++ і декремент --

//: Інкремент ++

//: Декремент --

// #endregion
