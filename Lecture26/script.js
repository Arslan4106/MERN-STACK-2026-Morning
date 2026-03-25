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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
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
