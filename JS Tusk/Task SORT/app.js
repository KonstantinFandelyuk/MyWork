const a = ["Ivan", "Kostya", "Kek", "Kolom"];
let strArr = a.join('').split('');
let mass = [];

function chancge(strArr) {
	for (let i = 0; i < strArr.length; i++) {
		mass.push(strArr[i].charCodeAt(""));
	}
	return mass;
}

console.log(chancge(strArr));

const b = [1, 5, 10, 9, 8, 6, 7, 4];

// **--------------- Сортировка

function arrSort(b) {
	for (let i = 0; i < b.length; i++) {
		for (let j = 0; j < b.length; j++) {
			if (b[i] < b[j]) {
				let c = b[i];
				b[i] = b[j];
				b[j] = c;
			}
		}
	}
	return b;
}
console.log(arrSort(mass));