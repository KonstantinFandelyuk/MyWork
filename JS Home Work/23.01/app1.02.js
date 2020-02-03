const a = [[1], [1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1], [1, 1, 1, 1]];

console.log(
  a.sort(
    (value, value2) =>
      value.reduce((acc, value) => acc + value, 0) - value2.reduce((acc, value) => acc + value, 0),
  ),
);

// REDUCE

// const b = [1, 2, 3, 4, 5, 6];

// const sum = b.reduce((acc, value, index, array) => {
//   return acc + value;
// }, 0);

// console.log(sum);

// Object

const LOL = {};

const Ivan = {
  name: "Ivan",
  age: 23,

  sayHi() {
    console.log(`Hello, I'm ${this.name}`);
  },

  kek: () => {
    console.log(this.name);
  },
};

// Ivan.sayHi();

// Ivan.name = "Serj";

// Ivan.sayHi();

// console.log(Object.keys());

