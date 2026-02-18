// Arrays and Arrays Methods
const friends = ["Shoaib", "Ali", "Jonas", "John", "Ikram", "Jalal"];
console.log(friends);
console.log(friends.length);
console.log(friends[4]);
// Looping the Arrays
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
// Arrays Methods
// Push: To add Element at end of the Array
friends.push("Ahmad");
console.log(friends);
// unshift: To add Element at begining of the Array
friends.unshift("Imtiaz");
console.log(friends);
// pop(): To remove the Elements from the end of the Array.
friends.pop();
friends.pop();
friends.pop();
console.log(friends);
// shift(): To remove element from starting of the Array
friends.shift();
friends.shift();
friends.shift();
console.log(friends);
// Includes():
console.log(friends.includes("Jalal"));
console.log(friends.includes("Jonas"));
// indexOf: To find the Index of any element in given array
friends.push("ALi");
friends.push("ikram");
friends.push("Imran");
console.log(friends);
console.log(friends.indexOf("Jonas"));
console.log(friends.indexOf("ALi"));
console.log(friends.indexOf("khan"));
friends[2] = " ";
console.log(friends);
