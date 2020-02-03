const a = [2, 5, 10, 5, 12, 43, 23, 324, 43, 32, 12, 3214, 6];

/*
 написать две функции которые сортируют масив 
 1) по возростанию
 2) по убыванию
*/

function sortArrUp(up) {
	for (let i = 0; i < up.length; i++) {
		for (let j = 0; j < up.length; j++) {
			if (up[i] < up[j]) {
				let b = up[i];
				up[i] = up[j];
				up[j] = b;
				console.log(a);
			}
		}
	}
}
sortArrUp(a);