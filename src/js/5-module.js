//; Module № 5. Перебираючі методи масивів

//! 1 ------ Колбек-функції -------

// #region //: - Колбек-функції

//; 1
/* function greet(name) {
  return `Welcome ${name}`;
}

console.log(greet('Mark'));
console.log(greet); */

//; 2
/* function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}

const pointer = makePizza;
const result = pointer();

console.log(result); */

//; 3

/* function shipGreet(name) {
  return `Welcome capitan ${name} borad on the Fire Run ship!`;
}

function shipStatus(name) {
  return `the drive is ready to warp would you like to begin ${name}? `;
}

function start(name, callback) {
  return callback(name);
  return `Status updated !`;
}

console.log(start('Shoni', shipGreet)); */

//; 4
/* function call01(name) {
  return `Welcome capitan ${name} borad on the Fire Run ship!`;
}

function call02(name) {
  return `the drive is ready to warp would you like to begin ${name}? `;
}

function mainFoo(name, callback) {
  return callback(name);
  return `Status updated !`;
}

console.log(mainFoo('Mark', call02)); */

//; 5

/* //: колбек функція
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
//: колбек функція
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Royal Grand', makePizza)); */

//; 6

/* function startEngine(callback) {
  return callback();
}

function engineGood() {
  return `Sussces! Engine started! `;
}

function issueEngine() {
  return 'Engine in the bad condition, we need to repair it!';
}

console.log(startEngine(issueEngine)); */

// #endregion

// #region //: - Інлайн-колбеки

//; 1

/* function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest('Mango', function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest('Poly', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});
 */
//; 2

/* function warpStart(captain, callback) {
  console.log(`${captain} register command...`);
  callback(captain);
}

warpStart('Capitan', function goodStart(captain) {
  console.log(`Ready to Warp!`);
});
console.log('');
warpStart('Capitan', function badStart(captain) {
  console.log(`Warning! ${captain} someting went wrong, need to fix issues `);
}); */

//; 3

/* function fooMain(item, foSecond) {
  console.log('Foo Main was called ');
  foSecond(item);
}

fooMain('Item', function foSecond(item) {
  console.log('foo second was called');
}); */

//; 4
// #endregion

// #region //: - Метод forEach(callback) - перебирання

//? метод перебирання масиву
//? використовується для заміни for, for...of
//?

//; 1
/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); */

//; 2
/* function filterArray(numbers, value) {
  let newArray = [];
  numbers.forEach(function (number) {
    if (number > value) {
      newArray.push(number);
    }
  });
  return newArray;
} */

/* console.log(filterArray([1, 2, 3, 4, 5], 3)); */

//; 3

/* function enemyPryority(numbers, rank) {
  let enemyAim = [];
  numbers.forEach(function (unit) {
    if (unit > rank) {
      enemyAim.push(unit);
    }
  });
  return enemyAim;
}
console.log(enemyPryority([14, 200, 4, 14, 55], 50)); */

//; 4
/* function armySupply(numbers, weight) {
  let storage = [];
  numbers.forEach(function (item) {
    if (item > weight) {
      storage.push(item);
    }
  });
  return storage;
}
console.log(armySupply([33, 45, 2, 57, 399, 23], 100)); */

// #endregion

//! 2 ------ Стрілочні функції -------

// #region //: - Стрілочні функції: синтаксис =>

//; 1

/* //? old
function getShip(a, b, c) {
  return a + b + c;
}

//? New
const getShip = (a, b, c) => {
  return a + b + c;
}; */

//; 2

/* const arowFoo = (a, b) => a + b;

console.log(arowFoo(10, 25)); */

//; 3

/* const mainFoo = (item, callback) => {
  console.log('This is main function ');
  callback(item);
};

mainFoo('First', function firstCallback(item) {
  console.log('fist callback');
}); */

//; 4
/* const add = (a, b) => {
  return `sum of two = ${a + b}`;
};

console.log(add(10, 20)); */

//; 5

/* const henlo = name => `Hello ${name}`;
console.log(henlo('mark'));
 */

//; 6

//; 7

/* const double = a => (a += a);

console.log(double(10)); */

//; 8

/* const squareArea = size => (size *= size);
console.log(squareArea(10)); */

/* const lastChar = string => {
  const lastIndex = string.length - 1;
  return string[lastIndex];
};

console.log(lastChar('Hello')); */

//; 9

// #endregion

// #region //: - Неявне повернення

//? якщо не має return
//? якщо після => є {} то це явне повернення
//? якщо потрібно зробити ще якісь інструкції окрім повернення значення

/* const addExp = (a, b) => {
  return a + b;
};
 */
//? із неявний повернення поернется вираз після =>

/* const addImp = (a, b) => a + b;

console.log(addImp(20, 30));
 */
// #endregion

// #region //: - Псевдомасив arguments

//;1
/* const add = (...args) => {
  return args;
};

console.log(add(1, 2, 3, 4)); */

//; 2
/* const planet = (...args) => {
  return args;
};
console.log(planet(24, 11, 124, 23)); */

// #endregion

// #region //: - Колбеки

//; 1

/* const numbers = [1, 2, 3, 4, 5];

//? old звичайна анонімна функція
numbers.forEach(function (numbers, index) {
  console.log(`Index ${index} of ${numbers}`);
});

console.log('------');
//? new стлілочна анонімна функція

numbers.forEach((numbers, index) => {
  console.log(`Index ${index} of ${numbers}`);
});
 */
//; 2

//: зберігання стрілочної функції оркемо

/* const numbers = [1, 2, 3, 4, 5];

const logMessage = (item, index) => {
  console.log(item, index);
};

numbers.forEach(logMessage); */

// #endregion

//! 3 ------ Методи map і flatMap -------

// #region //: - Чисті функції

//; 1

/* function changeEven(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
      return numbers;
    }
  }
} */

//; 2

/* const changeEven = (numbers, value) => {
  const newArray = [];

  numbers.forEach(element => {
    if (element % 2 === 0) {
      element = element + value;
    }
    newArray.push(element);
  });
  return newArray;
};

console.log(changeEven([1, 2, 3, 4, 5], 10)); */

// #endregion

// #region //: - Перебираючі методи

//? array.method(callback(currentValue,index,array))

/* const arrayName = [];
 */
/* array.method((item, idx, arr) => {
  //? логіка яка буде виконуватись на кожній ітерації
});

array.method(item => {
  //? Усі значення є не обовʼязкові окрім item
  //? логіка, яка буде виконуватися на кожній ітерації
}); */
// #endregion

// #region //: - Метод map()

//? метод перебирає та дозволяє змінювати елементи

//; 1
/* array.map((element, idx, array) => {
  //тіло функції 
}); */

/* const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
let planetsLengths = [];
planets.map(planet => {
  planetsLengths.push(planet.length);
});

console.log(planetsLengths);
 */

//; 2

// #endregion

// #region //: - Масив об'єктів

//? за допомогою map можна винести значення властивості (ключа)
//? в окремий масив

//; 1

/* const shipHangar = [
  { ship: 'Green', health: 100 },
  { ship: 'Yellow', health: 43 },
  { ship: 'Dragon', health: 60 },
  { ship: 'Star Crush', health: 100 },
  { ship: 'Tiger', health: 33 },
  { ship: 'Beta', health: 70 },
];

const names = shipHangar.map(ship => ship.health);
console.log(names); */

//; 2

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Tell-Tale Heart',
    author: 'Edgar Allan Poe',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log(titles); */

// #endregion

// #region //: - Метод flatMap()

//? Обʼєднує масиви обєкта в один масив

//; 1

/* const shipBay = [
  { name: 'green', weapon: ['gun', 'laser'] },
  { name: 'Black Bird', weapon: ['gun', 'space mine'] },
  { name: 'Rock', weapon: ['rocket', 'laser'] },
  { name: 'Red', weapon: ['turet', 'plasma gun'] },
];

const equipmnet = shipBay.flatMap(el => el.weapon);
console.log(equipmnet); */

// #endregion

//! 4 ------ Методи filter і find -------

// #region //: - Метод filter()

//? array.filter((el, idx, arr) => {
//* Тіло функції
//? })

//? Не змінює оригінальний масив
//? поелементно перебирає оригінальний масив
//? повертає новий масив
//? додає в масив, що повертається елементи, які задовільняють умоу колбек функції
//? якщо колбек TRUE то елемент додається в масив що повертається
//? якщо колбек повертув FALSE елемент не додається в масив що повертається
//? якщо жоден елемент не задовільнив умову повертає попрожній масив

//; 1

/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);

const oddNumbers = numbers.filter(number => number % 2 === 1);

console.log(evenNumbers);
console.log(oddNumbers); */

// #endregion

// #region //: - Метод filter() на масиві об'єктів

//; 1

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Tell-Tale Heart',
    author: 'Edgar Allan Poe',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR); */

//; 2
// #endregion

// #region //: - Метод find()

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

//! 5 ------ -------
// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //: -

// #endregion

// #region //; - Задачі

// #endregion
