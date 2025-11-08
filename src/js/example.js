const cars = [
  {
    id: 1,
    title: "Toyota Camry",
    price: 28312,
    img: "https://picsum.photos/720?random=1&car,toyota",
    onSale: false,
    type: "supercar",
  },
  {
    id: 2,
    title: "Honda Civic",
    price: 49756,
    img: "https://picsum.photos/720?random=2&car,Honda",
    onSale: true,
    type: "suv",
  },
  {
    id: 3,
    title: "BMW X5",
    price: 37689,
    img: "https://picsum.photos/720?random=3&car,BMW",
    onSale: true,
    type: "supercar",
  },
  {
    id: 4,
    title: "Chevrolet Malibu",
    price: 40233,
    img: "https://picsum.photos/720?random=4&car,Chevrolet",
    onSale: false,
    type: "suv",
  },
  {
    id: 5,
    title: "Mercedes-Benz E-Class",
    price: 19258,
    img: "https://picsum.photos/720?random=5&car,Mercedes-Benz",
    onSale: true,
    type: "sedan",
  },
  {
    id: 6,
    title: "Audi A4",
    price: 31674,
    img: "https://picsum.photos/720?random=6&car,Audi",
    onSale: false,
    type: "sedan",
  },
  {
    id: 7,
    title: "Lexus RX",
    price: 48326,
    img: "https://picsum.photos/720?random=7&car,Lexus",
    type: "supercar",
    onSale: false,
  },
  {
    id: 8,
    title: "Nissan Altima",
    price: 36890,
    img: "https://picsum.photos/720?random=8&car,Nissan",
    onSale: true,
    type: "suv",
  },
  {
    id: 9,
    title: "Hyundai Sonata",
    price: 29147,
    img: "https://picsum.photos/720?random=9&car,Hyundai",
    onSale: false,
    type: "suv",
  },
  {
    id: 10,
    title: "Ford Mustang",
    price: 43751,
    img: "https://picsum.photos/720?random=10&car,Ford",
    type: "supercar",
    onSale: true,
  },
  {
    id: 11,
    title: "Toyota Corolla",
    price: 41872,
    img: "https://picsum.photos/720?random=11&car,Toyota",
    onSale: false,
    type: "sedan",
  },
  {
    id: 12,
    title: "Honda Accord",
    price: 35491,
    img: "https://picsum.photos/720?random=12&car,Honda",
    onSale: true,
    type: "sedan",
  },
  {
    id: 13,
    title: "BMW 3 Series",
    price: 26783,
    img: "https://picsum.photos/720?random=13&car,BMW",
    type: "supercar",
    onSale: true,
  },
  {
    id: 14,
    title: "Chevrolet Silverado",
    price: 49205,
    img: "https://picsum.photos/720?random=14&car,Chevrolet",
    onSale: false,
    type: "suv",
  },
  {
    id: 15,
    title: "Mercedes-Benz GLC",
    price: 38957,
    img: "https://picsum.photos/720?random=15&car,Mercedes-Benz",
    onSale: true,
    type: "sedan",
  },
  {
    id: 16,
    title: "Audi Q5",
    price: 43296,
    img: "https://picsum.photos/720?random=16&car,Audi",
    type: "supercar",
    onSale: false,
  },
  {
    id: 17,
    title: "Lexus IS",
    price: 31548,
    img: "https://picsum.photos/720?random=17&car,Lexus",
    onSale: false,
    type: "suv",
  },
  {
    id: 18,
    title: "Nissan Rogue",
    price: 27041,
    img: "https://picsum.photos/720?random=18&car,Nissan",
    onSale: true,
    type: "sedan",
  },
  {
    id: 19,
    title: "Hyundai Tucson",
    price: 44103,
    img: "https://picsum.photos/720?random=19&car,Hyundai",
    onSale: false,
    type: "suv",
  },
  {
    id: 20,
    title: "Ford Explorer",
    price: 37619,
    img: "https://picsum.photos/720?random=20&car,Ford",
    type: "supercar",
    onSale: true,
  },
];

//! Пошук елементів

// створення обʼєкту refs (для зручності)
const refs = {
  createForm: document.querySelector(".js-create-form"),
  searchForm: document.querySelector(".js-form"),
  container: document.querySelector(".js-list"),
};

//!===== Данні з полів створення обєкту та розмітки та імплеметнація її =======

//- лисенер на кнопці сабміт та виклик функціЇ
refs.createForm.addEventListener("submit", handleCreateFormSubmit);

function handleCreateFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(refs.createForm); // збір
  const userData = Object.fromEntries(formData); // створення обʼєкту

  //- звертаємось через крапку до обʼєктів

  userData.id = Date.now(); // записує час у млс як айді
  userData.onSale = userData.onSale ? true : false; // записує буль із радіокнопки і перевіряє його
  userData.price *= 1; //! приводить до числа

  const carMarkup = carTemplate(userData); // активує функцію для створення картки машини

  console.log(carMarkup);

  refs.container.insertAdjacentHTML("afterbegin", carMarkup); // готову розмітку carMarkup записуємо після початку

  cars.unshift(userData);

  refs.createForm.reset(); //! Очистка форми обовязково!
}

//!======Функція творення розмітки =====================================

// функція створення розмітки
function carTemplate(car) {
  // перевірка: якщо авто у продажу — додає клас "on-sale"
  const onSaleClass = car.onSale ? "on-sale" : "";

  return `<li class="car-item ${onSaleClass}"> 
        <img src="${car.img}" alt="${car.title}" />
        <div class="car-info">
          <h3>${car.title}</h3>
          <p>Type: ${car.type}</p>
          <p>Price: ${car.price}$</p>
        </div>
      </li>`;
}

// Об’єднує всі картки в один HTML-рядок для вставки у контейнер
function carsTemplate(cars) {
  return cars.map(carTemplate).join("");
}
//
function renderCars(cars) {
  const markup = carsTemplate(cars); // передається функція з обєднаним списком машин
  refs.container.innerHTML = markup; // вставка в дом дерево
}

renderCars(cars);
//!======================================================

console.log(refs.searchForm.elements);

// Пошукова форма
// При кліку активується функція
refs.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userTitle = refs.searchForm.elements.query.value; // дістає value query це те що ми вводимо
  const userType = refs.searchForm.elements.type.value; // дістає value type це радіокнопки

  // фільтрує список cars за назвою (title) і типом (type)
  const filteredCars = cars.filter((el) => {
    const isValidTitle = el.title.includes(userTitle); // чи є вкащаний тайтл ікнлюд бо це рядок який вводиться
    const isValidType = el.type === userType; // чи дорвінює введений тип радіокнопка типу у кар
    const isAllType = userType === "all"; // якщо тип дорювнює алл то показує всі
    return isValidTitle && (isValidType || isAllType); // повертає авто, якщо збігається назва і тип (або "all" — усі)
  });

  renderCars(filteredCars); // викликає функція відфільтрованих машин
});

//======================================================
