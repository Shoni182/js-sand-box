//; Module №6 ООП. Класи

//! 1 ------ Контекст виконання функції -------

// #region  //: - Ключове слово this

//; 1
//* залежить в якому контексі викликається this
//* залежить як саме функцію викликати, а не де вона була оголошена

/* const hangar = {
  ships: ['shadow', 'fire star', ' bolid bomber'],

  checkStatus(name) {
    return this.ships.includes(name);
  },

  isItReady(name) {
    const isItReadyGo = this.checkStatus(name);
    if (!isItReadyGo) {
      return 'Sory no kind of ships on board';
    }
    return `ship ${name} is ready to travel`;
  },
}; */

//; 2

// #endregion

// #region  //: - Глобальний контекст

//* в глобальному без стрікт = window . у strict моді = undefined

/* function foo() {
  console.log(this);
}
foo(); */

// #endregion

// #region  //: - Контекст методу об'єкта

//; 1
//* функція викликана як метод обʼєкта тому контекс вказує на сам обʼєкт
/* const user = {
  username: 'Mark',
  age: 25,

  showThis() {
    console.log(this);
  },
};

user.showThis(); */

//; 2
//* спочатку глобальна функція в суворому режимі

/* ('use strict');

function showThis() {
  console.log('this is showThis: ', this); // this is shiwThis: undefined
}
 */
//* потім присвоюємо цю функцію ключу обʼєкта і викликаємо її як функцію (метод) цього обʼєкта

/* const user = {
  username: 'Mark',
};

user.showContext = showThis;

user.showContext();

showThis();
 */
// #endregion

// #region  //: - Метод call()
//? метод використовується тоді коли треба викликати функцію яка не є методом обʼєкта
//? методи call, apply, bind вказують на контекст виклику функції

//; foo.call(thisArg, arg1,arg2,...)

//? thisArg - обʼєкт яким ми хочемо встановити як контекст (значення this) для функції
//? arg1,arg2,... - необовʼязкові аргументи які будуть передані функції
//? метод call викликає функціяю foo так, що значення this у функції буде посилатися на обʼєкт this Args і також передає їй аргументи arg1, arg2

/* function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: 'Mango',
  room: 191,
};

const poly = {
  username: 'Poly',
  room: 191,
};

greet.call(mango, 'Welcome');
greet.call(poly, 'Aloha'); */

// #endregion

// #region  //: - Метод apply()

//? метод вимагає масиву на відміну від call .
//? все остальне таке саме
//; foo.apply(thisArg, [arg1, arg2, ...])

/* function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: 'Mango',
  room: 27,
};

const poly = {
  username: 'Poly',
  room: 191,
};

greet.apply(mango, ['Welcome']);
greet.apply(poly, ['Aloha']); */

// #endregion

// #region  //: - Метод bind() і втрата контексту

//; const boundFoo = foo.bind(thisArg, arg1, arg2, ...)
//? thisArg - обʼєкт яким ми хочемо встановити як контекст (значення this) для функції
//? arg1,arg2,... - необовʼязкові аргументи які будуть передані функції

'use strict';

/* const customer = {
  username: 'Jacob',
  sayHello() {
    console.log(`Hello, ${this.username}!`);
  },
};

customer.sayHello;

//^ const greet = customer.sayHello;  виклече помилку
const greet = customer.sayHello.bind(customer); //? bind(customer) дає знати до чого це відноситься

greet(); */
// при використанні bind() ми створюємо НОВУ функцію greet із правильним контекстом і
// може використовувати властивість username обʼєкта customer

// #endregion

// #region  //: - Метод bind() і колбеки

//? метод bind є корисним і його варто застосовувати у callback функціях

/* 'use strict';

const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName в глобальному контексті
  const username = callback();
  console.log(`Processing an aplication from ${username}`);
}

//^ makeMessage(customer.getFullName); помилка бо втрачає контекст через метод
//^ getFullName
makeMessage(customer.getFullName.bind(customer)); */

// #endregion

// #region  //: - Стрілочні функції

//? контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.
//? this усередині стрілки посилається на контект батьківської області видимості в якій
//? вона була оголошена і ніколи не змінюється

//? this посилається на обʼєкт
//; 1
/* const showThis = () => {
  console.log('this in showThis: ', this);
};

showThis(); // this in showThis: window */

//; 2
/* const showThis = () => {
  console.log('this in showThis: ', this);
};

const user = {
  username: 'Mango',
};

user.showContext = showThis;
user.showContext(); //thi in showThis:window
 */

//; 3
//? ігнорують наявність суворого режиму

/* 'use strict';

const showThis = () => {
  console.log('this in showThis: ', this);
};

showThis(); // this in showThis: window
 */

//; 4

//? стрілки запамятовують контекст під час виклику

/* const hotel = {
  username: 'Resort hotel',
  showThis() {
    const foo = () => {
      console.log('this in foo ', this);
    };
    foo();
    console.log('this in showThis ', this);
  },
};

hotel.showThis(); */
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

//; 5

//? 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
//? 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
//? 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.

/* const showThis = () => {
  console.log('this in showThis: ', this);
};

showThis.call({ username: 'Mango' }); // this in showThis: window
showThis.apply({ username: 'Mango' }); // this in showThis: window

const boundShowThis = showThis.bind({ username: 'Mango' }); */

// #endregion

//! 2 ------ Прототипи -------

// #region  //: - Прототип об'єкта

//? Отже, прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку

//; 1

/* const animal = {
  legs: 4,
};

const dog = Object.create(animal); //* незнаходить legs тому шукає через прототип animal
dog.name = 'Asti'; //* працює очевидним чином

console.log(dog); // {name: "Asti"}

console.log(dog.name); // "Mango"
console.log(dog.legs); // 4
 */

//; 2

/* const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(child.hasOwnProperty('surname'));
console.log(child.surname);
 */
//; 3

/* const spaceShip = {
  name: 'Black Star',
  id: 4003,
  fuel: 100,
};

const hangar = Object.create(spaceShip);
hangar.guns = 1000;

console.log(hangar.fuel); */

//; 4

/* const hangarA = {
  ships: 40,
  crew: 200,
};

const hangarB = Object.create(hangarA);
hangarB.shipsB = 20;

console.log(hangarB.crew);
 */
// #endregion

// #region  //: - Перевірка прототипу
//? Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf().
//; objA.isPrototypeOf(objB)
//? objA перевіряє чи я протопимов для обʼєкта objB якщо так то true якщо ні то false

/* const asteroidsField = {
  asteroidsNumber: 147927,
};

const hangar = {
  ships: 34,
};

const fighters = Object.create(hangar);
fighters.id = 'A1';

console.log(fighters);

console.log(hangar.isPrototypeOf(fighters));
console.log(hangar.isPrototypeOf(asteroidsField));
console.log(fighters.isPrototypeOf(asteroidsField));
console.log(fighters.isPrototypeOf(hangar)); */

//; 2

/* const hangarA = {
  crew: 200,
  ships: 20,
};

const hangarB = Object.create(hangarA);
hangarB.fuel = 100;

console.log(hangarA.isPrototypeOf(hangarB));
 */
// #endregion

// #region  //: - Власні і невласні властивості
//; obj.hasOwnProperty(key) - для перевірки обʼкту

//; 1
/* const asteroidsField = {
  asteroidsNumber: 147927,
};

const hangar = {
  //? невласна властивість
  ships: 34,
};

const fighters = Object.create(hangar);
fighters.id = 'A1'; //? власа властивість

console.log(fighters.hasOwnProperty('ships')); */

//; 2

/* const hangarA = {
  crew: 100,
  ships: 23,
};

const hangarB = Object.create(hangarA);
hangarB.fuel = 400;

for (const key in hangarB) {
  console.log(key);
}

for (const key in hangarB) {
  console.log(hangarB.hasOwnProperty(key));
}

console.log(Object.keys(hangarA));
console.log(Object.keys(hangarB));

console.log(Object.values(hangarA));
console.log(Object.values(hangarB)); */

// #endregion

// #region  //: - Перебір власних властивостей

/* const hangarA = {
  crew: 100,
  ships: 23,
};

const hangarB = Object.create(hangarA);
hangarB.fuel = 400;

for (const key in hangarB) {
  console.log(key);
}

for (const key in hangarB) {
  console.log(hangarB.hasOwnProperty(key));
}

console.log(Object.keys(hangarA));
console.log(Object.keys(hangarB));

console.log(Object.values(hangarA));
console.log(Object.values(hangarB)); */

// #endregion

// #region  //: - Ланцюжки прототипів

/* const objC = {
  c: 'Obj C property',
};

const objB = Object.create(objC);
objB.b = 'Obj B property';

const objA = Object.create(objB);
objA.a = 'Obj A property';

console.log(objA);
console.log(objC);
console.log(objB); */

// #endregion

// #region  //: - Кінець ланцюжка прототипів

// #endregion

//! 3 ------  Модуль 6. ООП. Класи -------

// #region  //: - Процедурне програмування

//? Приклад процедурного коду
/* const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);
 */

//^ Процедурне програмування — це те, як ми з тобою писали код до сих пір. Воно є простим і зрозумілим і може бути використане для написання простих програм. Проте зі збільшенням складності програми процедурний підхід може стати неефективним, оскільки втрачається зв'язок між даними й методами їх обробки.

// #endregion

// #region  //: - Об'єктно-орієнтоване програмування

const employee = {
  baseSalaty: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalaty + this.overtime * this.rate;
  },
};

employee.getWage();

//^ При такому підході відсутні або майже відсутні глобальні змінні. Методи не залежать від параметрів, а використовують властивості об'єкта, які задаються при його створенні і можуть бути змінені іншими методами.

// #endregion

// #region  //: - Клас

//? як абстрактний автомобіль чи схема в які описано методи та обєкти

// #endregion

// #region  //: - Екземпляр класу

//? це конкретний автомобіль яким можна керувати за допомогою інтерсфейчу класу
// #endregion

//! 4 ------  Класи -------

// #region  //: - Оголошення класу

//? Оголоішення класу має такий синтаксис
//? ключове слово  class
//? імʼя класу (user)
//? тіло класу у фігурних дужках
//? Класи прийнято називати з великої літери, а в назві відображати тип об'єкта (іменника), що створюється.

//^ створюємо класс
/* class User {
  //* тіло класу 
} */

//^ створюємо  екземпляр  за допомоною оператора  new
//^ поставивши його перед викликом класу new User() буде містити дані і дії що
//^ описані в тілі класу

/* const mango = new User();
console.log(mango);  */

// #endregion

// #region  //: - Конструктор класу

//? Для ініціалізації екземпляра класу використовується метод - constructor -.
// якщо він не визначний то буде створений конст за замовучваня - порожня функція
// яка не змінює екземпляр класу

/* class User {
   // синтаксис оголошення методу класу
  constructor( ){
   //... }
} */

//? виклик класу оператором - new - призводить до створення нового обʼкта та
//? автоматичного виклику методу - constructor -

//; 1
/* class User {
  constructor() {
    console.log('constructor call - message');
  }
}

const mango = new User(); // constructor - call message
console.log(mango); */

//; 2
//?Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.
/* class User {
  constructor(name, email) {
    console.log(name, email);
  }
}

const mango = new User('Mango', 'mango@gmail.com');
console.log(mango); */

//; 3
//? зверни увагу що конструктор викликається в контексі створюваного екземпляра

/* class User {
  constructor(name, email) {
    // ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User('Mango', 'mango@gmail.com');
console.log(mango); */

//? Таким чином, this усередині конструктора посилається на новостворений об'єкт.
//? Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
//? Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.

// #endregion

// #region  //: - Об'єкт параметрів

/* class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
    this.age = params.age;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@fdfdf',
  age: 20,
});

console.log(mango); */

// #endregion

// #region  //: - Методи класу (функції)

/* class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  // методи НЕ розділяються комою
  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@gmail.com',
});

console.log(mango.getEmail());

mango.changeEmail('alex@gmail.com');

console.log(mango.getEmail()); */

// #endregion

// #region  //: - Прототип екземпляру

/* class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ} */

// #endregion

// #region  //: - Приватні властивості

//? # робить властивість приватною

//; 1
/* class User {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'email@email',
});

console.log(mango.name); */

//? Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи.

//; 2
/* class User {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'email@email',
});

console.log(mango.getEmail()); // "mango@mail.com"
mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // "mango@supermail.com" */

//; 3

/* class Car {
  #brand;
  constructor(params) {
    this.#brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}
 */
// #endregion

// #region  //: - Приватні методи

/* class User {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для заміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log('invalid email format');
    }
  }

  // Привітний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes('@');
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});

// Спробуємо змінити електронну пошту
mango.changeEmail('newmail.com'); // "Invalid email format"
mango.changeEmail('new@mail.com');
console.log(mango.getEmail()); // "new@mail.com" */

// Прямий виклик приватного методу ззовні призведе до помилки

// #endregion

// #region  //: - Геттери і сеттери

//^ Геттер і сеттер повинні називатися однаково.
//^ Краще називати геттери і сеттери так само, як і властивість, з якою вони працюють. Геттер може існувати без сеттера, так само як і сеттер без геттера.
//; 1

/* class User {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});

console.log(mango.email); // mango@mail.com

mango.email = 'mango@supermail.com';

console.log(mango.email); // mango@supermail. */

//; 2

/* set email(newEmail) {
  if(newEmail === "") {
    console.log("Помилка! Пошта не може бути порожнім рядком!");
    return;
  }

  this.#email = newEmail;
} */
// #endregion

// #region  //: - Статичні властивості

// Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. Вони корисні для зберігання інформації, що стосується класу.

//^ оголошення статичної static - оголошується в тілі класу

//; 1
/* class MyClass {
  static myPop = 'value';
}

console.log(MyClass.myProp);
 */
//^ у екземпляра немає доступу до статичних властивостей класу
//; 2
/* class MyClass {
  static myProp = 'value';
}
const inst = newMyClass();
console.log(inst.myProp); */

//; 3

/* class User {
  static roles = {
    admin: 'admin',
    editor: 'editor',
    basic: 'basic',
  };

  #email;
  #role;

  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  email: 'mango@gmail.com',
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
mango.role = User.roles.basic;
console.log(mango.role); // "basic
mango.email = 'new email';

console.log(mango.email); */

//; 4

/* class Car {
  static maxPrice = 50000;
  #price;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.maxPrice) {
      this.#price = newPrice;
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

// #endregion

// #region  //: - Статичні методи

//; 1

/* class MyClass {
  static myMethod() {
    console.log('A static method');
  }
}

MyClass.myMethod(); // A static method */

//; 2
//^ Особливість статичних методів
//^Під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний //^метод може отримати доступ до статичних властивостей класу, але не до
//^властивостей екземпляра. Це логічно, адже статичні методи викликає сам клас, а не його екземпляри.
/* class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor(params) {
    this.#email = params.email;
    User.#takenEmails.push(params.email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(User.isEmailTaken('poly@mail.com')); // false
console.log(User.isEmailTaken('mango@mail.com')); // true
 */

//; 3

/* class Car {
  static #maxPrice = 50000;
  static checkPrice(price) {
    if (price > Car.#maxPrice) {
      return 'Error! Price exceeds the maximum';
    } else {
      return 'Success! Price is within acceptable limits';
    }
  }

  constructor(params) {
    this.price = params.price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum" */

// #endregion

// #region  //: - Наслідування класів
//? Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).

//; 1
/* class Parent { }
class Child extends Parent {
  //
} */

//; 2

/* class User {
  #email;

  constructor(email) {
    this.#email = email;
  }class

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // тіло класу ContentEditor
}

const editor = new ContentEditor('mango@mail.com');

console.log(editor); // { #email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com" */

//;

/* class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
}

console.log(Admin.role.BASIC); */

// #endregion

// #region  //: - Конструктор дочірнього класу

//У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу.
//В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка.

//; 1

/* class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor(params) {
    super(params.email);

    this.posts = params.posts;
  }
}

const editor = new ContentEditor({
  email: 'mango@sda',
  posts: [],
});

console.log(editor);
console.log(editor.email); */

//; 2

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  access;
  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser" */

// #endregion

// #region  //: - Методи дочірнього класу
// ? Дочірній клас може використовувати методи та властивості батьківського класу. Крім цього, у дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  blacklistedEmails = [];

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true */

// #endregion

//; 5 ------ Задачі -------

// #region  //; - Задачі

// #endregion
