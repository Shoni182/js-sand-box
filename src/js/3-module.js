//;  MODULE 3 Масиви і функції- array

//! 1 --- Масиви =============================

// #region //: - Масиви
//? Масив це адресса до якої ми звертаємость навість через const

/* const planets = ['earth', 'mars', 'venus']; //? array strings
const number = [1, 2, 3, 4, 5]; //?array numbers

const mixed = ['apple', 10, true];

console.log(planets[0]);
console.log(planets[1]);

const appleItems = ['iphone 15', 'iphone 16', 'iphone 17', 'macBook', 'iMac'];
const iphones = appleItems[2];

console.log(iphones); */

// #endregion

// #region //: - Перевизначення значення елемента

//? тут відбувається перевизначення незважаючи на const бо це адресса в памяті
//? Корисно для перевизначення значення

/* const googleItems = ['Pixel 8', 'Pixel 9', 'chromecast'];
googleItems[0] = 'Google Tv';
googleItems[2] = 'Pixel 10';
console.log(googleItems); */

// #endregion

// #region //: - Довжина масиву

//? Властивість Length
/* const planets = ['earth', 'venus', 'mars', 'jupiter'];
console.log(planets.length);

if (planets.length >= 3) {
  console.log('more');
} else {
  console.log('less');
}


function getOrderQuantity(order) {
  return order.length;
}
console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana'])); */

// #endregion

// #region //: - Індекс останнього елемента
//? довжина_масиву -1. він ниби заходить з іншої сторони незалежно від довжини масиву

//; 1
/* const games = ['Cod', 'Repo', 'GTA', 'Wicher 3'];
const lastGameIndex = games.length - 1;

console.log(games[lastGameIndex]); */

//; 2
/* function getLastElementMeta(array) {
  const lastIndex = array.length - 1;
  const lastName = array[lastIndex];
  return [lastIndex, lastName];
}
console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana'])); */

//; 3

/* const array = [1, 3, 4, 5];
const array = ['Mars', 'Earth', 'Sun'];

const lastIndex = array.length - 1;

const firstIndex = array[0];
const lastIndex = array[lastIndex];

console.log([firstIndex, lastIndex]);
 */

/* function getExtremeElements(array) {
  const lastIndex = array.length - 1;

  const firstNumber = array[0];
  const lastNumber = array[lastIndex];

  return [firstNumber, lastNumber];
}

console.log(getExtremeElements(['witcher', 'Got', 'the last of us', 'MadMax']));
console.log(getExtremeElements([1, 2, 3, 4, 5, 6]));
 */
// #endregion

// #region //: - Присвоєння за посиланням і за значенням

/* let a = 5;

let b = a;

//? Буде створення ще одна копія
console.log(a); //5
console.log(b); //5

a = 10;

//? Значення b залишається 5
console.log(a); // 10
console.log(b); // 5 */

//?2

/* const a = ['mango', 'poly'];
const b = a;

console.log(a);
console.log(b);

a[1] = 'Shoni';
console.log(a);
console.log(b);

b[0] = 'Jinx';
console.log(a);
console.log(b); */
// #endregion

// #region //: - Приведення типів: масиви

// #endregion

// #region  //; - Задачі 3.1

// #endregion

//! 2 --- Методи масиву =============================

// #region //: - Метод join( чимось ) Обʼєднати

//; 1
/* const words = ['Star Wars', 'Obi Wan', 'Lea', 'Nabu'];

console.log(words.join(' ***** '));
 */

//; 2

/* function isDifWord(string) {
  let words = string.split('_');
  return words.join(' ');
}

console.log(isDifWord('User_name is_different')); */

//; 3

/* function getLenght(array) {
  let words = array.join('');

  return words.length;
}

console.log(getLenght(['Mango', 'hurries', 'to', 'the', 'train'])); */

/* function getLength(array) {
  const numberWord = array.getLength(0);
}

console.log(getLength('words')); */
// #endregion

// #region //: - Метод split( чимось ) роздільник Перетворює на масив
//; 1
/* const item = 'macBook';
const letters = item.split('');

console.log(letters); */

//; 2
/* function calculateEngravingPrice(message, pricePerWord) {
  const array = message.split(' ');
  const count = array.length;

  return pricePerWord * count;
}

console.log(calculateEngravingPrice('Work and travel', 5)); */

//; 3

/* const Word = 'StarWars';
const splitedWord = Word.split('');
console.log(splitedWord);
 */
// #endregion

// #region //: - Метод slice( індекс ) скопіювати вибраний діапазон

//; 1
//? Перше число є включнийм останнє ні, це типу до того числа.

/* const phones = ['Iphone 17', 'Google Pixel 9', 'Samsung Galaxy 22', 'Xiomi'];

let result = phones.slice(1, 4);

console.log(result); */

/* console.log(phones.slice(1, 3)); //? 1-2 !3
 */

//; 2
/* //? - якщо не вказати початок та кінцеь буде скопійовано весь масив

const planets = ['earth', 'venus', 'mars'];
console.log(planets.slice());

//? якщо лише початок до буде йти до кінця

const orbits = ['earth', 'venus', 'mars', 'sun', 'jupiter'];
console.log(orbits.slice(3));

//? якщо число негативне то рахується з кінця масиву але порядок той же

const auto = ['Golf', 'Mazda', 'Nissan', 'BMW', 'audi'];
console.log(auto.slice(-3)); */

//; 3

/* const message = "Hello I'm here to drink a coffee";
const array = message.split(' ');
const count = array.slice(0, 4);

console.log(count);
 */
// #endregion

// #region //: - Метод concat() обʼєднує масиви = новий масив
//; 1
//? для обєднання масивів. Створюєнься новий масив попередні такі самі

/* const phones = ['Iphone 17', 'Iphone 16'];
const tablets = ['Ipad pro 25', 'ipad mini 24'];
const result = phones.concat(tablets);

console.log(result);
console.log(tablets);
 */
// #endregion

// #region //: - Метод indexOf()
//? indexOf(elem) - для визначення першого входження - першого індексу якщо ні то -1
//? === виконує сувору рівність
//? array.indexOf(elem)
//? виводить перший знайдений інший не буде
//? при відсутності елементу буде -1

//; 1
/* const phones = ['Iphone 17', 'Pixel 9', 'Pixel 7 pro'];
console.log(phones.indexOf('Pixel 7 pro'));
console.log(phones.indexOf('Iphone 17'));
console.log(phones.indexOf('Iphone 1'));
 */
//; 2

/* function getSlice(array, value) {
  let arrayIndex = array.indexOf(value);

  arrayIndex += 1;

  return array.slice(0, arrayIndex);
}

console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); */

// #endregion

// #region //: - Метод push() додавання елементу в кінець масиву
//; 1
/* const planets = ['Earth', 'Mars', 'Saturn', 'Jupiter'];
planets.push('Neptun');
console.log(planets);
 */
//; 2

/* const asteroids = [];

for (let i = 0; i < 10; i++) {
  asteroids.push(`Asteroid-Number:${i}`);
}
console.log(asteroids);
 */
//; 3

/* function createArrayOfNumbers(min, max) {
  const array = [];

  for (let i = min; i <= max; i++) {
    array.push(`${i}`);
  }
  return array;
}

console.log(createArrayOfNumbers(1, 3)); */

// #endregion

// #region  //; - Задачі 3.1

// #endregion

//! 3 --- Ітерація по масиву  =============================

// #region //: - Ітерація по масиву
//? використання for

//; 1
/* const planets = ['neptun', 'earth', 'mars', 'jupiter'];
for (let i = 0; i < planets.length; i++) {
  console.log(planets[i]);
} */

//; 2
//? В даному випадку було важко тому, що не можна ставити змінну в цикл

/* function calculateTotalPrice(order) {
  let total = 0; //! Потрібно змінну ДО функції щоб сума збільшувалась!!!
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total; //! ретурт має бути тут!
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); */

//; 3

/* function getEvenNumbers(start, end) {
  let numArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      numArray.push(i);
    } else {
      numArray.push(); //! має бути пустий щоб пропускав
    }
  }
  return numArray;
}

console.log(getEvenNumbers(3, 11)); */

// #endregion

// #region //: - Метод includes()
// `${item} is available to order!`;
// "Sorry! We are out of stock!"
//; 1
/* function checkStorage(storage, item) {
  let lowerCase = [];
  let itemLow = item.toLowerCase();

  for (let i = 0; i < storage.length; i++) {
    lowerCase.push(storage[i].toLowerCase()); //! тут return непотрібен бо він заповнює масив
    //! lowerCase який знаходиться вище
  }

  if (lowerCase.includes(itemLow)) {
    return `${itemLow} is available to order!`;
  } else {s
    return 'Sorry! We are out of stock!';
  }
}

console.log(checkStorage(['apple', 'pLum', 'pear'], 'PeAr')); */

//; 2
/* function getCommonElements(array1, array2) {
  let arrayTotal = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      arrayTotal.push(array1[i]);
    }
  }
  return arrayTotal;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); */

// #endregion

// #region //: - Цикл for...of

//; 1
/* const planets = ['Earth', 'Mars', 'Venus'];

for (const planet of planets) {
  console.log(planet);
}
 */
//; 2

/* function calculateTotalPrice(order) {
  let total = 0;
  for (const price of order) {
    total += price;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); */

// #endregion

// #region  //; - Задачі 3.2

// #endregion

//! 4 --- Функції (частина 2)  =============================

// #region //: - Псевдомасив arguments
//; 1
/* function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5); */

//; 2

/* function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
  return args.join('-');
}

foo(1, 2, 3); // Поверне "1 */

//; 3

/* function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120 */

//; 4

/* function createReversedArray() {

  let array = Array.from(arguments);
  array = array.toReversed();
  return array;
}

console.log(createReversedArray(12, 85, 37, 4)); */
// #endregion

// #region //: - Параметри за замовчуванням

//; 1

/* function greet(username = 'guest') {
  console.log(`Hello, ${username}!`);
}
greet('jacob');
greet();
 */

//; 2

/* function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step} `);

  for (let i = from; i <= to; i += step) {}
}
count(1, 15, 4); */

//; 3

/* function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}

console.log(calculateTax(100)); */

// #endregion

// #region //: - Функціональний вираз

// #endregion

// #region  //; - Задачі 3.2

// #endregion
