const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;
setTimeout(() => console.log("Timer 1 is Finished"), 0);
setImmediate(() => console.log("Immediate 1 is Finished"));
fs.readFile("test-file.txt", () => {
  console.log("I/O Finished");
  console.log("------------------------");
  setTimeout(() => console.log("Timer 2 is Finished"), 0);
  setTimeout(() => console.log("Timer 3 is Finished"), 3000);
  setImmediate(() => console.log("Immediate 2 is Finished"));
  process.nextTick(() => console.log("process.nextTick"));
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
});
console.log("This is the Toop Level Code");
// Event Loop Phases:
// There are many phases of Event Loop:
// SetTimeout: Pool Phasing
