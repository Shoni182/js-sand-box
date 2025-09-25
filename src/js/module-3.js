//;  MODULE 3 Масиви і функції- array

//! 1 --- Масиви =============================

// #region //: - Масиви
//? Масив це адресса до якої ми звертаємость навість через const
/* 
const planets = ['earth', 'mars', 'venus']; //? array strings
const number = [1, 2, 3, 4, 5]; //?array numbers

const mixed = ['apple', 10, true];

console.log(planets[0]);
console.log(planets[1]);

const appleItems = ['iphone 15', 'iphone 16', 'iphone 17', 'macBook', 'iMac'];
const iphones = appleItems[2];

console.log(iphones);
 */
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
} */

/* function getOrderQuantity(order) {
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

// #region //: - Метод join()

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

// #region //: - Метод split()
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

// #endregion

// #region //: - Метод slice()

//; 1
//? Перше число є включнийм останнє ні це типу до того числа.

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

// #endregion

// #region //: - Метод concat()
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

// #region //: - Метод push()
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
console.log(asteroids); */

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

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region  //; - Задачі 3.2

// #endregion

//! 4 --- Функції (частина 2)  =============================

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region  //; - Задачі 3.2

// #endregion
