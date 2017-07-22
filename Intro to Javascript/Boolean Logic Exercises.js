Part I
Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

2 == "2";  //true
2 === 2;  //true
10 % 3;   //1
10 % 3 === 1; //true
true && false; //false
false || true; // true
true || false; // true


Part II
Answer the following questions about this code block:

// var isLearning = true;
// if(isLearning){
//     console.log("Keep it up!");
// } else {
//     console.log("Pretty sure you are learning....");
// }

1. What should the above code console.log?
Keep it up!

2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
The if statement automatically assume the condition is true if it is not set.



var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}

3. What should the above code console.log? Why?
"third"
firstVariable is undefined
secondVariable is an empty string which is not true.

4. What is the value of firstVariable when it is initialized?
Undefined.

Is the value of firstVariable a "truthy" value? Why?
No, undefined is falsey

Is the value of secondVariable a "truthy" value? Why?
No because it is an empty string

Is the value of thirdVariable a "truthy" value? Why?
Yes because true == 1

Part III
Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".

if (math.random >= 0.5) {
	console.log("Over 0.5");
} else {
	console.log("Under 0.5");
}



What is a falsey value? List all the falsey values in JavaScript.
Undefined, NaN, False, 0, Null, ""

