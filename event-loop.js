const fs = require("fs");
setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 is Finished"));
fs.readFile("test-file.txt", () => {
  console.log("I/O Finished");
  setTimeout(() => console.log("Timer 2 Finished", 0));
  setTimeout(() => console.log("Timer 3 Finished"), 3000);
  setImmediate(() => console.log("Immediate 2 Finished"));
});

console.log("This is a Top Level Code");
