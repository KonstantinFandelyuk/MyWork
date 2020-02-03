// const kolom = (a, b) => {
//   let res = a + b;

//   return res;
// };

// const lel = (a, b) => a + b;

// console.log("res - 1: ", kolom(1, 533)); // kolom()
// console.log("res - 2: ", kolom(1, 2));
// console.log("res - 3: ", kolom(1, 54));
// console.log("res - 4: ", kolom(24, 533));

// console.log("lel: ", lel(500, 500));

// const arrOne = [2, 2, 2];
// const arrTwo = [1, 2, 3];

// const printArray = (b) => {
//   for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
//   }
// };

// const plusArray = (c, l) => {
//   const res = [];

//   for (let i = 0; i < c.length; i++) {
//     res[i] = c[i] + l[i];
//   }

//   return res;
// };

// // printArray(arrTwo);
// printArray(plusArray(arrOne, arrTwo));

// const arr = [1, 2, 3, 4, 5];

// forEach, map, filter, sort

// arr.forEach((value, index, array) => {
//   console.log("value: ", value, " index: ", index);
// });

// const MyForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };

// const kek = (value) => {
//   console.log(value + 5);
// };

// MyForEach(arr, kek);

// arr.forEach((value, index) => {
//   if (index % 2 == 1) {
//     console.log(value);
//   }
// });

// ---------------------------------- MAP

// const b = arr.map((value) => value + 100);

// console.log(b, arr);

// ---------------------------------- filter

// Сделать функцию map которая принимает массив и callback

// const Mymap = (callbackFn, arr) => {
//   const arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     arr2[i] = callbackFn(arr[i], i, arr);
//   }

//   return arr2;
// };

// const MultyFunc = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2; // arr[i] = arr[i] * 2;
//   }

//   return arr;
// };

// console.log(MultyFunc([1, 2, 3, 4]));

// const b = Mymap(
//   (value, index) => {
//     return value / (index + 1);
//   },
//   [4, 2, 5],
// );

// console.log(b);

// const c = [1, 2, 3, 4].map((value, index, arr) => arr);

// console.log(b);
// console.log(c);

// const a = (value) => {
//   console.log(value);

//   if (value < 15) {
//     a(value + 1);
//   }
// };

// a(0);

// Разобраться как работает функция filter и написать ее аналог (filter)

// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "kek", "kk","keke"];

// const result = words.filter(word) => {
//   word > 6;
// }

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const myFilter = (callbackFn, arr) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true) {
      arr2[i] = callbackFn(arr[i], i, arr);
    }
  }
  return arr2;
};

const b = myFilter(
  (value) => {
    return value > 3;
  },
  ["spray", "limit", "elite", "exuberant", "destruction", "present"],
);

console.log(b);

// const c = ["spray", "limit", "elite", "exuberant", "destruction", "present", "kek", "kk","keke"].filter((value, index) => value.length <= 4 );
// console.log(c);
