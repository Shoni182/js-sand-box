// #region  Перевизначення комбінованим оператором

/* let students = 100;

students = students + 50;
students += 60;

console.log(students); */

// #endregion

// #region Примітивні типи данних РЯДКИ

/* const firstName = 'Alice';
const lastName = 'Franko';

const fullName = firstName + ' ' + lastName;

const message = `Hello ${firstName} ${lastName}`;

console.log(message);
 

const companyName = 'Boston dynamics';
const repairBots = 150;
const defenceBots = 50;

const msg = `${companyName} has ${repairBots + defenceBots} in stock`;

console.log(msg);*/

// #endregion

//#region Індексація рядків

/* const droidName = 'BP01-Destroyer';
const lastIndex = droidName.length - 1;

console.log(droidName.length);
console.log(droidName[0]);
console.log(droidName[5]);

console.log(droidName[droidName.length - 1]); */

//#endregion

// #region  Перетворення Типів: РЯДКИ

/* 
Явне перетворення  

console.log(String(true));
console.log(typeof String(null));
console.log(String(undefined));

/* Неявне перетворення  */

/* console.log(5 + '5');
console.log('5' + true); */
//console.log('5' + undefined);
//console.log('5' + undefined);

// #endregion

// #region Перетворення типів: ЧИСЛА

/* console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN -  Not a Number
console.log(Number('25px')); // зупинається після зустрічі того що не може змінити px

console.log('5' * 2); // з іншими орператорами буде перетворення рядка числа на число
console.log('5' + 2); // з додаванням буде конкатинація !!!
 */
// #endregion

// #region Оператори

// Оператор порівняння >  < >= <=

/* console.log(5 > 3);
console.log('10' >= 7);
console.log('10' >= 10);
console.log(3 > 7);
console.log(3 >= 7); */

//console.log('8' > '5');

// Оператор Рівності

/* console.log('4' == 4); // оператор несуворої рівності  - НЕ звертає увагу на ТИПИ
console.log('5' === 5); // оператор суворої рівності - ПЕРЕВІРЯЄ  тип
console.log(5 === 5); // оператор суворої рівності - ПЕРЕВІРЯЄ  тип (краще використовувати його)

console.log(1 == true); // несуворий тому оператор переведе true в 1 і порівняє
console.log(1 === true); // перевірить тип - він неспівпаде буде falce
console.log('0' == false); // true */

/* console.log('Alice' < 'alice'); // літера в нижньому регістрі має ВИЩИЙ юнікод (приорітетність)  */

// Приведення типів операндів

// #endregion

// #region Арифметичні Функції
/* 
Перетворення рядка в число 

* - Number.parseInt
* - Number.parseFloat
* - Math */

/* let width = '50px';
width = Number.parseInt(width);

console.log(width);

let heigth = '100.5px';
heigth = Number.parseFloat(heigth);
console.log(heigth); */

//const value = 27.4;

//console.log(Math.floor(value)); // округлю число до основи
//console.log(Math.ceil(value)); // округлю число до слідуючої цілої частини
//console.log(Math.round(value)); // округлю число до цілої частини

//console.log(Math());

// #endregion

// #region Функції
/* function doStuff(a, b) {
  // імя довільне
  // Тіло Функції
  // const calculated = a * b; - можна невикористовувати зайву змінну
  return a * b; // Існує для Припинення роботи функції та повернення значення назовні у місце ВИКЛИКУ
}

const result = doStuff(10, 50);

console.log(result); */

/* let katya = null;
let petya = null;
let yura = null;

function salary($, hr, day, proc) {
  return $ * hr * day * proc;
}

katya = salary(20, 8, 15, 1.2);
petya = salary(20, 8, 20, 1.2);
yura = salary(20, 8, 21, 1.2);

console.log('katya', katya);
console.log('petya', petya);
console.log('yura', yura);
 */

//2

/* function salary(day, $) {
  const dayTotal = day * 8;
  return dayTotal * $ * 1.2;
}

const katya = salary(20, 20);
const petya = salary(5, 13);
const yura = salary(28, 35);

console.log('katya', katya);
console.log('petya', petya);
console.log('yura', yura); */

// #endregion

// #region Області Видимості Функції
// Все що знаходиться поза фігурними дужками то він доступний всюди

/* const general = 'General Box';

function foo() {
  const local = 'Local Box';

  function subFoo() {
    const subLocal = 'Sub Local Box';
    const general = 'Sub Local Box General';
  }
  subFoo();
}

foo(); */

// #endregion

// #region Задача

/* function calcBMI(we, he) {
  let numWeight = we.replace(',', '.');
  numWeight = Number.parseFloat(numWeight);
  const numHeight = Number.parseFloat(he);
  const bmi = numWeight / numHeight ** 2;
  return bmi.toFixed(1);

  console.log(bmi);
  //console.log(numWeight);
}

const bmi = calcBMI('68,6', '1.78');
console.log(bmi); */

// #endregion

// #region  Задачі
/* Напишіть функцію яка приймає два параметри str1 та str2.Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.В іншому випадку функція повинна повернути булеве значення false. */

//
//

/* Задача-2
Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-3
Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-4
Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-5
Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-6
Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-7
Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-8
Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.

Підказка: допоможе toLowerCase(); */

/* Задача-9
Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-12
Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. В іншому випадку функція повинна повернути булеве значення false. */

/* Задача-14
Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку). В іншому випадку функція повинна повернути булеве значення false.

Підказка: тут допоможе метод масиву reverse(); */

/* Задача-15
Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2. В іншому випадку функція повинна повернути булеве значення false. */

/* Task 1
Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

const value = 27.5; */

// #endregion
