const random = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

var a = new Array(random(0, 100));
var b = new Array(random(0, 100));

var n = random(0, 9);
var k = random(0, 9);
var l = random(0, 9);

var res = 0;

for (var j = 0; j < a.length; j++) a[j] = random(0, 10);
for (j = 0; j < b.length; j++) b[j] = random(0, 10);

console.log("a: ", a);
console.log("b: ", b);
console.log("n: ", n);
console.log("k: ", k);
console.log("l: ", l);

/* Code here */

/* end your code */
