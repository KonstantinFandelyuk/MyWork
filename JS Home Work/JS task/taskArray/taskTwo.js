/*
  Input : a = [1, 2, 3, 4]
          b = [1, 2, 3, 4]

  Сума двох масивов

  OutPut: [2, 4, 6, 8]
 */

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];

/* Your code here*/

for (var i = 0; i < a.length; i++) {
        a[i] = a[i] + b[i];
};
/* end your code*/

console.log("Result: ", a);