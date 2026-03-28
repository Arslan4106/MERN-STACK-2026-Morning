// Destructuring Of Arrays
const restaurant = {
  name: "KFC",
  location: "Walton Road Lahore",
  categories: ["Organic Food", "Fast Food", "Vegeterian", "Desi Food"],
  starterMenu: ["Sweets", "Drinks", "Fries", "Salad", "Russian Salad"],
  mainMenu: [
    "Pizzas",
    "Burgers",
    "Chicken Manchurian",
    "Chicken Karahi",
    "Mutton",
  ],
  openingHours: {
    thur: {
      open: 7,
      close: 5,
    },
    fri: {
      open: 8,
      close: 6,
    },
    sat: {
      open: 9,
      close: 7,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, starterIndex = 0, mainIndex = 3 }) {
    // console.log(obj);
    // console.log(time, address, starterIndex, mainIndex);
    console.log(
      `Order Received! The Order of ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be Delivered to ${address} at ${time}`,
    );
  },
};
// Order Food
restaurant.orderDelivery({
  time: "9:00pm",
  address: "Brains College Walton Road, Lahore",
  // starterIndex: 2,
  // mainIndex: 2,
});
// Destructuring of the Array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , , secondory] = restaurant.categories;
console.log(main, secondory);
// Swaping the Variables
// let temp = main;
// main = secondory;
// secondory = temp;
// console.log(main, secondory);
[main, secondory] = [secondory, main];
console.log(main, secondory);

// Nested Destructure
const arrr = [2, 3, [5, 6]];
const [k, , [l, m]] = arrr;
console.log(k, l, m);

console.log(restaurant.order(2, 0));
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Default Values
const NewArray = [3];
const [p = 1, q = 1, r = 1] = NewArray;
console.log(p, q, r);

// Destructuring of Objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(name, openingHours, categories);
console.log(restaurantName, hours, tags);

// Mutating the Variables
let t = 999;
let u = 111;
console.log(t, u);
const obj = { t: 4, u: 8, v: 9 };
({ t, u } = obj);
console.log(t, u);
// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// The Spread Operator (...)
const arayy = [8, 9, 10];
const newArray = [1, 2, 3, arayy[0], arayy[1], arayy[2]];
console.log(newArray);
const newgoodArray = [1, 2, 3, ...arayy];
console.log(newgoodArray);
// Array Clone
const myArray = ["Fish", ...restaurant.categories, "Tea"];
console.log(myArray);
console.log(restaurant.categories);
// Join the Arrays
const myMenu = [
  ...restaurant.categories,
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(myMenu);
