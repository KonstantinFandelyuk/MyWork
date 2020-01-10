const random = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

var a = new Array(10);
var n = random(0, 9);
var k = random(0, 9);
var oneRes = 0;
var twoRes = 0;
var threeRes = 0;

for (var j = 0; j < a.length; j++) a[j] = random(0, 10);

console.log("a: ", a, "n: ", n, "k: ", k);

/* Code here */

/* end your code */
