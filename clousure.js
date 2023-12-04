// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
// console.log("Learn");

// function x() {
//   for (var i = 1; i <= 10; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Learn");
// }
// x();

// const object = {
//   message: "Hello, World!",

//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
// };

// console.log(object.getMessage());

// function Pet(name) {
//   this.name = name;

//   this.getName = () => this.name;
// }

// const cat = new Pet("Fluffy");

// console.log(cat.getName()); // What is logged?

// const { getName } = cat;
// console.log(getName());

// const object = {
//   message: "Hello, World!",

//   logMessage() {
//     console.log(this.message); // What is logged?
//   },
// };
// setTimeout(object.logMessage, 1000);

// const object = {
//   who: "World",

//   greet() {
//     return `Hello, ${this.who}!`;
//   },

//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   },
// };

// console.log(object.greet()); // What is logged?
// console.log(object.farewell());

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method(callback) {
//     console.log(this.length);
//     callback();
//   },
// };

// object.method(callback, 1, 2);

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};

object.method(callback, 1, 2);
