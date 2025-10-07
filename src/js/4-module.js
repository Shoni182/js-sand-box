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

// #region //; - Задачі

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
/* 
const bookShelf = {
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
console.log(atTheOldToad.updatePotionName('Speed potion', 'Invisibility'));
 */
// #endregion

// #region //; - Задачі

// #endregion

//! 5 ------ Синтаксис spread і rest -------

// #region  //: - Залишкові параметри ...args,rest

/* function add(...args) {
  let total = 0;

  for (let item of args) {
    total += item;
  }
  return total;
}

console.log(add(12, 4, 11, 48)); */

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
