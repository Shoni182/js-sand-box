//; Module № 4. Об'єкти

//! 1 ------ Створення об'єкта -------

// #region  //: - Створення об'єкта

/* const appartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
 */
// #endregion

// #region  //: - Вкладені властивості

//? ship = {
//? weapon:  {
//? lasert,
//? gun }}
//; 1

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
}; */

//; 2

/* const ship = {
  engine: true,
  shields: 3,
  crew: 150,
  fuel: 10000,
  weapon: {
    laser: 5000,
    roketSystem: 10,
    gun: 500,
  },
};

console.log(ship.weapon.laser); */

// #endregion

// #region  //: - Доступ до властивостей через крапку

//? const cargo = spaceShip.cargo . просто через крапку можна ключ в ключі так само

/* const spaceShip = {
  crew: 3000,
  liquidFuel: 10000,
  nuclearCores: 5,
  weapon: {
    laser1: true,
    laser2: true,
    roketLauncher: false,
    gun: false,
  },
  cargo: ['apple', 'Water', 'Oil', 'Mushrooms'],
};

const cargo = spaceShip.cargo;

console.log(cargo); */

// #endregion

// #region  //: - Доступ до властивостей через квадратні дужки

//? objectName["key"],
//? Обовязково вказувти ключ в лапках
//? але коли звертаєшся до змінної то просто в кв дужках без лапок

/* const spaceShip = {
  crew: 3000,
  liquidFuel: 10000,
  nuclearCores: 5,
  weapon: {
    laser1: true,
    laser2: true,
    roketLauncher: false,
    gun: false,
  },
  cargo: ['apple', 'Water', 'Oil', 'Mushrooms'],
};

const shipCargo = 'cargo';
console.log(spaceShip[shipCargo]); //? звертіється за значенням у змінній
 */
// #endregion

// #region  //: - Зміна значення властивостей

/* const spaceShip = {
  crew: 150,
  fuel: 1000,
  nuclearCores: 5,
  weapon: {
    laser1: true,
    laser2: true,
    gun3: false,
  },
  cargo: ['apple', 'mushroom', 'water'],
};

spaceShip.crew = 120;
spaceShip.fuel = 800;
spaceShip.nuclearCores = 2;

console.log(spaceShip.nuclearCores);
console.log(spaceShip.fuel); */

// #endregion

// #region  //: - Додавання властивостей

/* const spaceShip = {
  crew: 150,
  fuel: 1000,
  nuclearCores: 5,
  weapon: {
    laser1: true,
    laser2: true,
    gun3: false,
  },
  cargo: ['apple', 'mushroom', 'water'],
};

spaceShip.crew = {
  engineers: 20,
  pilots: 10,
  other: 130,
};
spaceShip.shield = 100;
console.log(spaceShip.crew);
console.log(spaceShip); */

// #endregion

// #region  //: - Короткі властивості

//; 1 ----

/* const laser1 = 100; //? для довгого

const fuel = 200; //? для короткого

const spaceShip = {
  crew: {
    engineers: 20,
    pilots: 10,
    other: 130,
  },

  fuel, //? короткий варіант
  nuclearCores: 5,

  weapon: {
    laser1: laser1, //? довгий варіант
    laser2: true,
    gun3: false,
  },
  cargo: ['apple', 'mushroom', 'water'],
};

console.log(spaceShip.weapon.laser1);
console.log(spaceShip.fuel); */

//; 2 ----

/* const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product); */

// #endregion

// #region  //: - Обчислювальні властивості

//; 1

/* const spaceShip = {
  crew: 150,
  fuel: 1000,
  nuclearCores: 5,
  weapon: {
    laser1: 100,
    laser2: 200,
    gun3: 300,
  },
  cargo: ['apple', 'mushroom', 'water'],
}; */

//; 2

/* const leadName = 'name';
const member = {
  age: 30,
};
member[leadName] = 'sir.Dalas';
console.log(member.name);

const crewName = 'name';
const member = {
  age: 20,
  [crewName]: 'mr.Bird',
};

console.log(member.name); */

// #endregion

// #region //; - Задачі

// #endregion

//! 2 ------ Перебір об'єкта -------

// #region  //: - Цикл for...in

//; 1

/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
 */

//; 2
/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Ключ
  /* console.log(book[key]); // Значення властивості з таким ключем */

// #endregion

// #region  //: - Метод Object.keys()

//? Object.keys() тут назва завжди keys
//? Object.keys() робить масив і ключів

//; 1

/* const brigade = {
  soldiers: 4500,
  tanks: 40,
  bradley: 150,
  fpvPilots: 30,
};
const unitsKey = Object.keys(brigade);

for (const units of unitsKey) {
  console.log(brigade[units]);
} */

//; 2

/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
const keys = [];

const unitKey = Object.keys(apartment);

for (const valuesOf of unitKey) {
  values.push(apartment[valuesOf]);
  keys.push(valuesOf);
} */

//; 3

/* const ship = {
  crew: 100,
  fuel: 300,
};

for (const key in ship) {
  console.log(key);
  console.log(ship[key]);
} 

const array = Object.keys(ship); //? тут переводиться ключі в масив
console.log(array); //?  ['crew', 'fuel']

//? тут в
for (const key of array) {
  console.log(key); //? crew. fuek 
  console.log(ship[key]); //? тут дістаємо власивість ключа наприклад при цикл 1 буде key = crew тому покаже його властивість 100 300 
} */

//; 4

/* function countProps(object) {
  let propCount = 0;

  const objProp = Object.keys(object);

  for (const key of objProp) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

console.log(countProps({}));
 */
// #endregion

// #region  //: - Метод Object.values()

//; 1

/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

const arrKeys = Object.keys(apartment);
const arrValue = Object.values(apartment);

for (const key of arrKeys) {
  keys.push(key);
}
for (const value of arrValue) {
  values.push(value);
}
 */

//; 2

/* function countTotalSalary(salaries) {
  let totalSalary = 0;

  const salaryValue = Object.values(salaries);
  console.log(salaryValue);

  for (const count of salaryValue) {
    totalSalary += count;
  }
  return totalSalary;
}

console.log(countTotalSalary({})); */

// #endregion

// #region //; - Задачі ()

// #region //; Задача 1
//* Напиши функцію, яка приймає об'єкт і новий вік.
//* Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
//* Поверни оновлений об'єкт

/* function changeAge(obj, newAge) {
  obj.age = newAge;
  return obj;
}

console.log(changeAge({ age: 10, name: 'Stiven,' }, 100)); */
// #endregion

// #region //; Задача 2
//* Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
//* Поверни оновлений об'єкт.

/* function deleteObject(obj) {
  delete obj.age;
  return obj;
}

console.log(deleteObject({ age: 10, name: 'Ship', manufactured: 'Ukraine' })); */
// #endregion

// #region //; Задача 3
//* Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".

/* function getName(obj) {
  return obj.name;
}

console.log(getName({ name: 'Makr', age: 24 })); */

// #endregion

// #region //; Задача 4
//* Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.

//; 1
/* function checkAddres(obj) {
  const check = Object.keys(obj);
  return check.includes('address');
}

console.log(checkAddres({ name: 'mark', age: 25 }));
 */

// #endregion

// #region //; Задача 5
//* Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
//* Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
//* Поверни результат.

/* function fooName(obj1, obj2) {
  const obj3 = {
    ...obj1,
    ...obj2,
  };
  return obj3;
}

console.log(
  fooName(
    { name: 'Mark', age: 25, ship: 'Starship' },
    { name: 'Mark', age: 27, ship: 'Star Fighter' }
  )
); */

// #endregion

// #region //; Задача 6
//* Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
//* Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
//* Поверни об'єкт.

/* function createObj(object) {
  if (!object.name) {
    object.name = 'Unknown';
  }

  if (!object.age) {
    object.age = 0;
  }
  return object;
}

console.log(createObj({ name: '', age: 0, address: 'sdfsdf' })); */

// #endregion

// #region //; Задача 7
//* Напиши функцію, яка приймає об'єкт та нові значення для імені та віку.
//* Функція повинна змінити обидві властивості в об'єкті.
//* Поверни оновлений об'єкт.

/* function person(obj, name, age) {
  obj.name = name;
  obj.age = age;
  return obj;
}

console.log(person({ name: ' Mark', age: 20 }), 'Stiven', 50); */

// #endregion

// #region //; Задача 8
//* Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
//* Якщо в об'єкті вже є "email", нічого не роби.
//* Поверни оновлений об'єкт.

/* function newEmail(obj, email) {
  if (!obj.email) {
    obj.email = 'empty';
  }
  return obj;
}
console.log(newEmail({ name: 'Alfred', age: 44, email: 'alfred$gmail.com' })); */

// #endregion

// #region //; Задача 9
//* Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
//* Поверни оновлений об'єкт.

/* function changeNumber(obj) {
  obj.age = obj.age.toString();

  return obj;
}
console.log(changeNumber({ name: 'alfred', age: 34 })); */

// #endregion

// #region //; Задача 10
//* Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
//* Якщо її немає, поверни об'єкт без змін.

/* function changeAddress(obj, address) {
  if (!obj.adress) {
    obj.address = 'no adress';
  }
  return obj;
}

console.log(changeAddress({ name: 'Mark', email: 'Slon@gmail.com' })); */

// #endregion

// #region //; Задача 11
//* Напиши функцію, яка приймає об'єкт користувача з властивостями name та city.
//* Та повертає рядок "User {імя користувача} from {місто користувача}!"

/* function personInfo(obj, name, city) {
  obj = {
    name,
    city,
  };

  return `User ${obj.name} from ${obj.city} `;
}

console.log(personInfo({ age: 25, number: +300455033 }, 'Sasha', 'Uzghorod')); */

// #endregion

// #region //; Задача 12
//* Напиши функцію, яка приймає масив з ключами і значеннями
//* (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]])
//* і створює об'єкт з цих пар. Поверни об'єкт.

/* function glueAll(arrays) {
  const sumArray = [...arrays[0], ...arrays[1], ...arrays[2]];
  return sumArray;
}

console.log(
  glueAll([
    ['name', 'John'],
    ['age', 25],
    ['address', '123 Street'],
  ])
); */

// #endregion

// #region //; Задача 13
//* Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age",
//* збільшуючи її на 1. Поверни оновлений масив об'єктів.

/* function foo(objArrays) {
  for (const item of objArrays) {
    item.age += 1;
  }
  return objArrays;
}

console.log(foo([{ age: 44 }, { age: 23 }, { age: 35 }])); */

// #endregion

// #region //; Задача 14
//* Створіть об'єкт contactBook, який зберігатиме список контактів
//* та надаватиме методи для додавання, видалення та пошуку контактів.

//! Приклад

/* const array = [2, 5, 9];
console.log(array);
const index = array.indexOf(2);
if (index > -1) {
  // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}
// array = [2, 9]
console.log(array); */
//! Задача“

/* const contactBook = {
  contactList: [],

  //: додавання
  addContact(newContact) {
    this.contactList.push(newContact);
  },

  //: Видалення
  removeContact(deleteUser) {
    for (const user of this.contactList) {
      if (user.name === deleteUser) {
        const index = this.contactList.indexOf(user);
        this.contactList.splice(index, 1);
        return ` User: ${user.name} was susscessfuly deleted! `;
      }
    }
    return ` User: ${deleteUser} was susscessfuly deleted! `;
  },

  //: пошук
  searchContact(searchUser) {
    for (const user of this.contactList) {
      if (user.name === searchUser) {
        return `Your request is in progress... searching ${searchUser}.... Succsess! the contact ${user.name} was found!.`;
      }
    }
    return `Your request is in progress... searching ${searchUser}.... the contact ${searchUser} is not in the list! .`;
  },
};

console.log(
  contactBook.addContact({ name: 'Felix', age: 25, number: +38050755438 })
);
console.log(
  contactBook.addContact({ name: 'Tim', age: 55, number: +380503554268 })
);
console.log(
  contactBook.addContact({ name: 'Elsa', age: 35, number: +380503530568 })
);

console.log(contactBook.searchContact('Tim'));
console.log(contactBook.contactList);
console.log(contactBook.removeContact('Tim'));
console.log(contactBook.contactList);

console.log(contactBook.searchContact('Tim'));
console.log(contactBook.searchContact('Elsa')); */

// #endregion

// #region //; Задача 15
//* Створіть об'єкт rectangle, який представлятиме прямокутник
//* з методами для обчислення його площі та периметра.
//* Об'єкт повинен приймати довжини двох сторін під час створення.

/* const objRectangle = {
  aLength: 0,
  bWidth: 0,

  calcArea(aLength, bWidth) {
    return aLength * bWidth;
  },

  calcPerimeter(aLength, bWidth) {
    return (aLength + bWidth) * 2;
  },
};

console.log(objRectangle.calcArea(2, 10));
console.log(objRectangle.calcPerimeter(2, 10)); */

// #endregion

// #region //; Задача 16
//* Створіть об'єкт toDoList, який зберігатиме список задач
//* та надаватиме методи для додавання нових завдань,
//* позначки задачі як виконаної та виведення списку завдань.

/* const objTodoList = {
  list: [],

  newTask(task) {
    this.list.push(task);
  },

  doneTask(done) {
    for (let item of this.list) {
      if (item.includes(done)) {
        let i = this.list.indexOf(item);
        item = item + ' ✅ Done';
        return (this.list[i] = item);
      }
    }
    return ' ⚠️ task with that name is not found';
  },

  showList() {
    return this.list;
  },
};
 */
/* console.log(objTodoList.newTask('task 1 - Work on project'));
console.log(objTodoList.newTask('task 2 - make some tea'));
console.log(objTodoList.newTask('task 3 - goit '));
console.log(objTodoList.newTask('task 4 - english '));

console.log(objTodoList.doneTask('task 2'));

console.table(objTodoList.showList());
 */
// #endregion

// #region //; Задача 17
//* Створіть об'єкт bankAccount, який представлятиме банківський рахунок
//* із методами для депозиту, зняття коштів та перевірки балансу.
//* Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
// #endregion

// #region //; Задача 18
//* Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці
//* та надаватиме методи для додавання нових книг,
//* пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// #endregion

// #region //; Задача 19
//* Створіть об'єкт temperatureConverter, який матиме методи
//* для конвертації температур між градусами Цельсія та Фаренгейта.
// #endregion

// #region //; Задача 20
//* Створіть об'єкт shoppingCart, який зберігатиме список товарів
//* та надаватиме методи для додавання товарів,
//* підрахунку загальної вартості та виведення списку товарів.
// #endregion

// #region //; Задача 21
//* Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі
//* з полями username, friends (список друзів)
//* та методами для додавання та видалення друзів,
//* а також виведення списку друзів.
// #endregion

// #region //; Задача 22
//* Створіть об'єкт musicPlayer, який зберігатиме список пісень
//* та надаватиме методи для додавання нових пісень,
//* відтворення, паузи та перемикання між піснями.
// #endregion

// #region //; Задача 23
//* Створіть об'єкт myString, який буде мати наступні методи:
//* метод reverse(), який параметром приймає рядок і повертає його в перевернутому вигляді;
//* метод ucFirst(), який приймає рядок і повертає його з першою великою літерою;
//* метод ucWords(), який робить заголовною першу літеру кожного слова в рядку.
// #endregion

// #region //; Задача 24
//* Створіть об'єкт validator, який перевірятиме рядки.
//* Наприклад, метод isEmail(str) перевіряє, чи є рядок коректним емейлом.
//* Крім того, об'єкт має методи: isDomain(str), isDate(str), isPhone(str) —
//* для перевірки доменів, дат та номерів телефонів відповідно.
// #endregion

// #endregion

//! 3 ------  Масив Обʼєктів -------

// #region  //: - Масив об’єктів

//; 2

/* const colors = [
  {
    hex: '#f44336',
    rgb: '244,67,54',
  },
  {
    hex: '#2196f3',
    rgb: '33,150,243',
  },
  {
    hex: '#4caf50',
    rgb: '76,175,80',
  },
  {
    hex: '#ffeb3b',
    rgb: '255,235,59',
  },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(rgbColors); */

// #endregion

// #region  //: - Пошук об'єкта за значенням властивості

//; 1

/* function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  for (const item of products) {
    if (item.name === productName) {
      return item.price;
    }
  }
}

console.log(getProductPrice('Scanner'));
 */
// #endregion

// #region  //: - Колекція значень властивості

//; 1

/* function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  const propArray = [];

  for (const item of products) {
    if (item.hasOwnProperty(propName)) {
      propArray.push(item[propName]);
    }
  }
  return propArray;
}
console.log(getAllPropValues('price')); */

//; 2

/* function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  debugger;
  for (const item of products) {
    if (item.name === productName) {
      return item.price * item.quantity;
      }
      }
      return `Product ${productName} not found!`;
      }
      console.log(calculateTotalPrice('Grip')); */

//: тут була проблема з тим що до item, я не знав що можна дати посилання далі
//: на значення кюча
//: А також потрібно другий ретурн ставити поза дужками for бо інакше цикл не продовжиться і перерветься на першому false
// #endregion

// #region //; - Задачі

// #endregion

//! 4 ------ Методи об'єкта -------

// #region  //: - Методи об'єкта
//; 1

/* const bookShelf = {
  books: ['The Last Kingdom', 'Dream Guardian'],
  // Це метод об'єкта
  getBooks() {
    return 'Returning all books';
  },
  // Це метод об'єкта
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
};

// Виклики методів
console.log(bookShelf.getBooks()); // поверне "Returning all books"
console.log(bookShelf.addBook('New book 1')); // поверне "Adding book New book 1"
console.log(bookShelf.addBook('New book 2')); // поверне "Adding book New book 2" */

//; 2

/* const atTheOldToad = {
  potions: [],

  getPotions() {
    return 'List of all available potions';
  },

  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

console.log(atTheOldToad.addPotion('Invisibility')); */

//; 3

/* const sheepForge = {
  ships: [],

  inProgress(status) {
    if (status === true) {
      this.ships.push('Ship');
      return this.ships;
    } else {
    }
    return 'In progress';
  },
};

console.log(sheepForge.inProgress(true));
 */
// #endregion

// #region  //: - Доступ до властивостей об'єкта

//; 1

/* const atTheOldToad = {
  potions: ['Speed potion', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
};
console.log(atTheOldToad.getPotions());
 */

//; 2

/* const atTheOldToad = {
  potions: ['Speed potion', 'Stone skin'],

  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    this.potions.push(potionName);
    return this.potions;
  },
}; */

//; 3

/* const atTheOldToad = {
  potions: ['Speed potion', 'Stone skin'],

  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    this.potions.push(potionName);
    return this.potions;
  },
};

console.log(atTheOldToad.addPotion('Sik')); */

//; 4

/* const shipFactory = {
  hangar: [],

  getInfo() {
    return this.hangar;
  },

  addShips(shipName) {
    this.hangar.push(shipName);
  },
};

console.log(shipFactory.addShips('Fire Blow'));
console.log(shipFactory.addShips('Wind'));
console.log(shipFactory.addShips('Fire Watch'));
console.log(shipFactory.getInfo('Wind')); */

// #endregion

// #region  //: - Масив об’єктів

//; 1
/* const bookShelf = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

bookShelf.getAvarageRating(); // 7 */

//; 2

/* const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;

    for (const item of this.potions) {
      totalPrice += item.price;
    }
    return totalPrice;
  },
};
console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));

console.log(atTheOldToad.getTotalPrice()); */

// #endregion

// #region  //: - Зміна об'єкта в масиві

/* const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  updatePotionName(oldName, newName) {
    for (const title of this.potions) {
      if (title.name === oldName) {
        title.name = newName;
      }
    }
    return this.potions;
  },
};
console.log(atTheOldToad.updatePotionName('Speed potion', 'Invisibility')); */

// #endregion

// #region //; - Задачі

// #endregion

//! 5 ------ Синтаксис spread і rest -------

// #region  //: - Залишкові параметри ...args,rest

//? перетворює в масив який є ітерабельним
//? без цього він видасть помилку. тому потрібен "...args"

//; 1
/* function add(...arg) {
  let total = 0;

  for (let item of arg) {
    total += item;
  }
  return total;
}

console.log(add(12, 4, 11, 48)); */

//; 2

/* function names(...strings) {
  let 
  
} */

// #endregion

// #region  //: - Збір частини аргументів

/* function addOverNum(value, ...args) {
  let argsSum = 0;
  for (const item of args) {
    if (item > value) {
      argsSum += item;
    }
  }
  return argsSum;
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); */

// #endregion

// #region  //: - Входження параметрів ...spread

/* function getExtremeScores(scores) {
  const score = {
    best: 0,
    worst: 0,
  };
  score.best = Math.max(...scores);
  score.worst = Math.min(...scores);

  return score;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); */

// #endregion

// #region  //: - Створення масиву. ...1, ...2,

/* const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(bestScore);
console.log(worstScore);
console.log(allScores); */
// #endregion

// #region  //: - Створення об'єкта

/* const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};

const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
  ...defaultSettings,
  ...overrideSettings,
};
console.log(finalSettings); */

// #endregion

// #region //; - Задачі

// ------------------------------------ 4

/* const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],


  createTransaction(amount, type) {
    const obj = { id: amount, amount, type };
    return obj;
  },

  deposit(amount) {
    this.balance += amount;
    //                                                      "deposit"
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },
  withdraw(amount) {
    if(this.balance < amount) {
      console.log("недостатньо коштів");
      return;
    }

    this.balance -= amount;
    const transation = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transation);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for(const item of this.transactions) {
      if(item.id === id) {
        return item;
      }
    }

    return "Not found";
  },
  getTransactionTotal(type) {
    let total = 0;

    for(const item of this.transactions) {
      if(item.type === type) {
        total += item.amount
      }
    }

    return total;
  },
};


account.deposit(300);
account.deposit(100);

account.withdraw(200); */

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2000));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// console.log(account);

// #region //; із коментаріями

// #endregion

// #endregion
