1. Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]

//answer
function rotate(arr,num) {
  var arr2 = arr.splice(arr.length-num).concat(arr.splice(0,num+1));
  return arr2;
}



2. Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
makeXOGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/

//answer
function makeXOGrid(row, column) {
	var arr = [];
	var nested = [];
		for (var j = 1; j <= column; j++) {
			if (j % 2 !== 0) {
				nested.push("X");
			} else 
				nested.push("O");
		
		}
		for (var i = 1; i <= row; i++) {
		arr.push(nested);
	}
	return arr;
}

