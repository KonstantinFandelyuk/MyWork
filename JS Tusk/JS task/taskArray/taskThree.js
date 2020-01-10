/*
  Input: a = [1, 2, 3, 4, 5, 6]

  сумма цифр в массиве

  Output: 21;
*/

var a = [1, 2, 3, 4, 5, 6];
var res = 0;

/* Your code here*/
for (var i = 0; i < a.length; i++) {
  console.log("res: ", res, " index: ", i)
  res += a[i];
}
/* end your code*/

console.log("Result: ", res);