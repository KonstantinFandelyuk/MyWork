/* Type */
var array = [1, 2, 3, 4, 5, 6]; // array -> [ type ]
var char = "2"; // char
var string = "123123123"; // [char]
var number = 12; // number
var float = 0.3; // number
var object = {
  name: "Ivan",
  age: 12,
  level: 80,
  Items: { item1: 2, item2: "234" },
  Inven: [123, 321, 321, 323]
}; // object { key: type  }

/* style guide */
var snake_case = 2; // GOOD
var camelCase = 2; // VERY GOOD

/* Array */
var testArr = ["a", "b", "c", "v", "f", "e"];

/* Loops */

// for ( что сделать до начало цикла ; условие выхода из цикла ; делать каждый итерацию ) { делать каждую итерацию  }

/* 

  делать до начала цикла;
  делать до начала цикла;
  делать до начала цикла;
  
  for ( делать до начало цикла ; условие выхода из цикла ; делать каждый итерацию ) { 
    делать каждую итерацию;
    делать каждую итерацию;
    делать каждую итерацию; 
  }

  делать после цикла; 
  делать после цикла;
  делать после цикла;
  делать после цикла;
*/

/* 
  i = i + 1; => i++;
  i = i - 1; => i--;

  i = i + 5; => i += 5;
  i = i - 50; => i -= 50;
  i = i * 2; => i *= 2;
  i = i / 4; => i /= 4;
*/

var st = "";

/** Your code here */

for (var i = 0; i < testArr.length; i++) {
  // console.log({ i, st, ArrFromI: testArr[i] })

  st = st + testArr[i] + "-";
}

/** End your code */

console.log("Result: ", st);

// 1 --- arr[0]
// 2 --- arr[1]
