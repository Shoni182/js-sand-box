//;  MODULE 2 Java Script

//! ---  1 Розгалуження =============================

// #region //: - Інструкція if

/*nction getPrice(subscription) {
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

// #region //; - Задачі "✅"

/* //; Задача-1
Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye". */

/* function security(age, balance) {
  if (age >= 18 && balance >= 100) {
    return 'Wellcome';
  } else {
    return 'Goodbye';
  }
}
console.log(security(17, 100)); */

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

/* function isYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    return 'Високосний рік';
  } else {
    return 'Звичайний рік';
  }
}

console.log(isYear(2028)); */

//? end
/* //; Задача-9
Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено". */

/* function isHasInvitation(hasInvitation, isFriend) {
  const meInvited = 1;
  if (true == isFriend || true == hasInvitation) {
    return 'Ви запрошені';
  } else {
    return 'Вхід заборонено';
  }
}

console.log(isHasInvitation(0, 0)); */

//? end
/* //; Задача-10
Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер". */

/* function isPersonAdult(age) {
  if (age < 12) {
    return 'Дитина';
  } else if (age >= 12 && age <= 18) {
    return 'Підліток';
  } else if (age > 18 && age <= 60) {
    return 'Дорослий';
  } else {
    return 'Пенсіонер';
  }
}
console.log(isPersonAdult());
 */
//? end

// #endregion

//! ---  2 Логічні Оператори ==========================

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

//! ---  3 Методи рядків ============================

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

//! --- 4 Цикли ============================

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
console.log(calculateTotal(18));
 */
// #endregion

// #region //: - Цикл do…while|

//; Приклад

/* let count = 0;

do {
  console.log(`Count: ${count}`);
  count += 1;
} while (count < 5);
 */
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

//! ПОВТОРИТИ І ЗРОБИТИ САМОМУ
/* console.log(6 % 12); */

/* function calculateEvenTotal(number) {
  
  for (let i = 1; i <= number; i++) {
    
  }
  return total;
}
console.log(calculateEvenTotal(6)); */

// #endregion

// #region //: - Оператор break

/* let start = 6;
let end = 17;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 == 0) {
    number = i;
    break;
  }
}

console.log(number); */

/* console.log(20 % 5); */

// #endregion

// #region //: - Оператор break і функції

/* function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    let sum = 0;
    if (i % divisor == 0) {
      sum = i;
      return sum;
    }
  }
}
console.log(findNumber(2, 6, 5)); */

// #endregion

// #region //; Задачі

/*
;Задача-11
Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".
*/

/* function login(isLoggedIn, hasAdminRights) {
  if (isLoggedIn && hasAdminRights) {
    return 'Адмін-сторінка';
  } else if (isLoggedIn == true) {
    return 'Користувач';
  } else {
    return 'Гість';
  }
}
console.log(login(false, true)); */

/*
;Задача-12
Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".
*/

/* function speedLimit(speed) {
  if (speed <= 60) {
    return 'Безпечно';
  } else if (speed > 60 && speed < 100) {
    return 'УВАГА !';
  } else {
    return 'Небезпечно';
  }
}
console.log(speedLimit(200)); */

/*
;Задача-13
Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
*/

/* function theDay(time, isWeekend) {
  if (time < 12 && isWeekend === false) {
    return 'Ранок буднього дня';
  } else if (time > 18 && isWeekend === false) {
    return 'Вечір';
  } else if (time >= 12 && time <= 18 && isWeekend === true) {
    return 'День вихідного дня';
  } else {
    return 'Вечір2';
  }
}
console.log(theDay(15, false)); */

/*
;Задача-14
Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
*/

/* function isAlergen(hasGlutenAllergy, containsGluten) {
  if (hasGlutenAllergy === true && containsGluten === true) {
    return 'Не можна їсти';
  } else {
    return 'можна їсти ';
  }
}
console.log(isAlergen(false, true));
 */
/*
;Задача-15
Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".
*/

/* function isAdult(age) {
  const type =
    age >= 18 ? 'Можна купувати алкоголь' : 'Не можна купувати алкоголь';
  return type;
}
console.log(isAdult());
 */
/*
;Задача-16
Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".
*/

/* function canWalk(isSunny) {
  const type = isSunny === true ? 'Вийдемо на прогулянку' : 'Залишимося вдома';
  return type;
}
console.log(canWalk(false));
 */
/*
;Задача-17
Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".
*/

/* function isNumber(number) {
  const type = number % 2 === 0 ? 'Парне' : 'Непарне';
  return type;
}
console.log(isNumber(114)); */

/*
;Задача-18
Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".
*/

/* function password(password, confirmPassword) {
  const passwordLock = 'blink182';
  const passCeck =
    password == passwordLock ? 'Паролі збігаються' : 'Паролі не збігаються';
  return passCeck;
}
console.log(password('blink18')); */

/*
;Задача-19
Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".
*/

/* function isSeason(temperature) {
  const temp = temperature;
  if (temp <= 0) {
    return 'Зима';
  } else if (temp > 0 && temp <= 15) {
    return 'Весна';
  } else if (temp >= 16 && temp <= 25) {
    return 'Літо';
  } else {
    return 'Осінь';
  }
}
console.log(isSeason());
 */
/*
;Задача-20
Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".
*/

/* function isNumberEqual(number1, number2) {
  if (number1 > number2) {
    return 'Перше більше';
  } else if (number1 < number2) {
    return 'Перше менше';
  } else {
    return 'Рівні';
  }
}
console.log(isNumberEqual(24, 24)); */

/*
;Задача-21
Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".
*/

/*
;Задача-22
Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".
*/

/*
;Задача-23
Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг".
*/

/*
;Задача-24
Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".
*/

/*
;Задача-25
Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".
*/

/*
;Задача-26
Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
*/

/*
;Задача-27
Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".
*/

/*
;Задача-28
Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число".
*/

/*
;Задача-29
Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома".
*/

/*
;Задача-30
Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".
*/

/*
;Задача-31
Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). Якщо рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому випадку поверніть "Звичайний рік".
*/

/*
;Задача-32
Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і isSeniorCitizen (булевий). Якщо вік менший за 18 або є студентом, або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", в іншому випадку поверніть "Повна вартість квитка".
*/

/*
;Задача-33
Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".
*/

/*
;Задача-34
Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть "Знижка не доступна".
*/

/*
;Задача-35
Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".
*/

/*
;Задача-36
Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції".
*/

/*
;Задача-37
Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", в іншому випадку поверніть "Вільний час".
*/

/*
;Задача-38
Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна".
*/

/*
;Задача-39
Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть "Не можна керувати автомобілем".
*/

/*
;Задача-40
Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі".
*/

/*
;Задача-41
Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", в іншому випадку поверніть "Скидка не доступна".
*/

/*
;Задача-42
Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".
*/

/*
;Задача-43
Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно".
*/

/*
;Задача-44
Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".
*/

/*
;Задача-45
Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше".


*/
/*
/ча-46 Напишіть функцію, яка приймає один параметр animal. Використовуючи
switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від
введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб",
"Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка",
"Черепаха", "Змія" - "Рептилія". */

/*
;Задача-47
Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди. Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг".
*/

/*
;Задача-48
Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований".
*/

/*
;Задача-49
Напишіть функцію, яка приймає один параметр month. Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима".
*/

/*
;Задача-50
Напишіть функцію, яка приймає один параметр color. Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір".
*/

/*
;Задача-51
Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".
*/
// #endregion
