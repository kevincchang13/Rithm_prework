Given the following HTML, create a script.js file to complete the first two parts.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>DOM Exercise</title>
//     <style>
//         div {
//           width: 50px;
//           height: 50px;
//           display: inline-block;
//         }
//         .brown{
//           background-color: brown;
//         }
//         .green{
//           background-color: green;
//         }
//         .blue{
//           background-color: blue;
//         }
//         .purple{
//           background-color: purple;
//         }
//         .yellow{
//           background-color: yellow;
//         }
//         .car1 {
//          background-color: #8C9C12;
//         }
//         .car2 {
//          background-color: #1DA788;
//         }
//         .car1, .car2 {
//             margin-left: 0;
//         }
//     </style>
// </head>
// <body>
//     <h1 id="change_heading">Change Me!</h1>
//     SELECTED COLOR <span class="selected">None!</span>
//     <section>
//         <div class="brown"></div>
//         <div class="green"></div>
//         <div class="blue"></div>
//         <div class="yellow"></div>
//     </section>
//     <h2>Race!</h2>
//     <button>Start the race!</button>
//     <br>
//     <div class="car1"></div>
//     <br>
//     <div class="car2"></div>
//     <script src="script.js"></script>
// </body>
// </html>



Part 1
1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.
document.addEventListener(DOMContentLoaded, function (){})

2. Replace the text "Change me" with "Hello World!".
var text = document.getElementById('change_heading');
text.innerText = "Hello World!";

3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
var boxes = document.querySelector('section');
section.addEventListener("mouseover", function(event) {
    var color = document.querySelector('.selected');
    color.innerText = event.target.className;
})

4. Create a new div element.
var newDiv = document.createElement('div');

5. Give your new div a class of purple and style it so that it has a background color of purple.
newDiv.className = 'purple'
.purple {
  background-color: purple;
}

6. Append your new div to the page to the section tag.
var boxes = document.querySelector('section');
boxes.addElement(newDiv)


Part 2
Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"



Part 3
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo


Part 4:
Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete!