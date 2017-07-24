Answer the following questions:

1. What does the throw keyword do?
Throw keyword will throw an error that we define and stop the execution of the code

2. What does the finally keyword do?
Finally will execute code within it regardless of an error

3. What is the difference between a TypeError and ReferenceError?
TypeError is the result of using a variable of the wrong type while ReferenceError is the result of trying to use a variable that is not in scope.

4. How do you create a snippet in the Chrome dev tools?
Go into the JavaScript chrome tools and into the sources tab. 

5. In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
An exception is an error in the code

6. How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
we use try and catch methods.

try {
    someVariable;
} catch(error) {
    console.log("The error is", error);
}




Explain what type of error will be thrown, why the error is occuring, and how to fix it:

1.
person;
This is a ReferenceError. 
fix: var person;


2.
var data = {};
data.displayInfo();

This is a TypeError
There is no function displayInfo in the data object

3.
var data = {};
data.displayInfo.foo = "bar";

TypeError 
we want to add a key value pair to undefined

4.
function data(){
    var thing = "foo";
}
data(); 
thing;

ReferenceError because we cant call a variable that is not in scope


Part II
Fix the broken code and explain what was wrong:

1.

for(var i=0; i > 5; i++){
    console.log(i);
}

Need to change the second argument in the for statement to "i < 5" or the statement will not even run  

2.

function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}

need to change the argument in the if statment "num % 2 === 0"

3.

function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}

need to change arguemnts from "," to ";"

4.

// function displayEvenNumbers(){
//     var numbers = [1,2,3,4,5,6,7,8];
//     var evenNumbers = [];
//     for(var i=0; i<numbers.length-1; i++;){
//         if(numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // should return [2,4,6,8] 

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.


function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); 