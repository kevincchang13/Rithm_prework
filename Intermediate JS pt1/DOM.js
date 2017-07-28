Given the following HTML:

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>
*/

Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
document.getElementById("container");

2. Select the section with an id of container using querySelector.
document.querySelector("#container");

3. Select all of the list items with a class of "second".
document.querySelectorAll('.second');

4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third');

5. Give the section with an id of container the text "Hello!".
var container = document.getElementById('container')
container.innerText = "Hello!"

6. Add the class main to the div with a class of footer.
var footer = document.querySelector('div .footer')
footer.classList.add("main")

7. Remove the class main on the div with a class of footer.
var footer = document.querySelector('div .footer');
footer.classList.remove("main")

8. Create a new li element.
var li = document.createElement('li');

9. Give the li the text "four".
li.innerText = "Hello"

10. Append the li to the ul element.
var ul = document.querySelector('ul');
ul.appendChild(li)

11. Loop over all of the lis inside the ol tag and give them a background color of "green".
var lis = document.querySelectorAll("ol li")
for (var i = 0; i < lis.length; i++){
    lis[i].style.backgroundColor = "green";
}

12. Remove the div with a class of footer.
var footer = document.querySelector('.footer')
footer.remove()



