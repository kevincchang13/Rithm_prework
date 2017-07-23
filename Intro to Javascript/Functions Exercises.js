Part 1
difference
// this function takes in two parameters and returns the difference of the two;
// difference(2,2); // 0
// difference(0,2); // -2

function difference(a,b) {
	return a - b;
}

product
// this function takes in two parameters and returns the product of the two;
// product(2,2); // 4
// product(0,2); // 0

function product(a,b) {
	return a * b;
}

printDay
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
// printDay(4); // "Wednesday"
// printDay(41); // undefined
function printDay(num) {
	if (num > 7 || num < 1) {
		return undefined;
	} else if (num === 1) {
		return "Sunday";
	} else if (num === 2) {
		return "Monday";
	} else if (num === 3) {
		return "Tuesday";
	} else if (num === 4) {
		return "Wednesday";
	} else if (num === 5) {
		return "Thursday"
	} else if (num === 6) {
		return "Friday";
	} else {
		return "Saturday";
	}

}

lastElement
// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
// lastElement([1,2,3,4]); // 4
// lastElement([]); // undefined

function lastElement(arr) {
	if (arr === []) {
		return undefined;
	} else
		return arr[arr.length-1]

}

numberCompare
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
// numberCompare(1,1); // "Numbers are equal"
// numberCompare(2,1); // "First is greater"
// numberCompare(1,2); // "Second is greater"

function numberCompare(a,b){
	if (a > b) {
		return "First is greater";
	} else if (b > a) {
		return "Second is greater";
	} else {
		return "Numbers are equal";
	}

}

singleLetterCount
// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
// singleLetterCount('amazing','A'); // 2
// singleLetterCount('Rithm School','o'); // 2

function singleLetterCount(str,letter) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === letter.toLowerCase()) {
			count++
		}
	}
	return count
}


Part 2
multipleLetterCount
// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
// multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
// multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

function mulitpleLetterCount(str) {
	var answer = str.split("").reduce(function(obj,letter) {
		if (!obj[letter]) {
			obj[letter] = 1;
		} else{
			obj[letter]++;
		}
			return obj
	}, {});
	return answer
}

arrayManipulation
// this function should take in at most four parameters (an array, command, location, and value).
// If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.
// arrayManipulation([1,2,3], "remove", "end"); // 3
// arrayManipulation([1,2,3], "remove", "beginning"); // 1
// arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
// arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]
function arrayManipulation(arr,command,location,value) {
	if (command === "remove" & location === "end") {
		return arr.pop();
	} else if (command === "remove" & location === "beginning") {
		return arr.shift()
	} else if (command === "add" & location === "beginning") {
		arr.unshift(value);
		return arr;
	} else {
		arr.push(value);
		return arr;
	}
}

isPalindrome
// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true
// isPalindrome('testing'); // false
// isPalindrome('tacocat'); // true
// isPalindrome('hannah'); // true
// isPalindrome('robert'); // false
function isPalindrome(str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === str[str.length-1-i].toLowerCase()){
			return true;
		} else {
			return false;
		}
	}
}


// Part 3
Rock / Paper / Scissor
// using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

function roshambo(choice) {
	var computerChoice;
	if (Math.random() < 0.33) {
		computerChoice = "scissor";
	} else if (Math.random() > 0.66) {
		computerChoice = "rock";
	} else if ((Math.random() > 0.33) && (Math.random()/3 < 0.66)){
		computerChoice = "paper";
	}
	if (choice === computerChoice) {
		return "tie";
	} else if ((choice === "rock" && computerChoice === "paper") || (choice === "paper" && computerChoice === "scissor") || (choice === "scissor" && computerChoice === "rock")) {
		return "you lose";
	} else {
		return "you win";
	}

}