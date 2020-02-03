const a = [2, 5, 10, 5, 12];
const b = [4, 4, 4, 4, 4];
const c = [1, 2, 3, 4, 5];

const k = 2;

/*

 до "К": "а" + "b"  
 после "К": "a" - "c"

*/
for (let i = 0; i < a.length; i++) {
    let res = "";
    if (i < k) {
      a[i] = b[i];
//     } else {
//       if (i > k) {
//         a[i] -= c[i];
//       }
    }
  }

console.log(a);