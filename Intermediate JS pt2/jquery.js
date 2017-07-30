Complete the following exercises for the following HTML page. Make sure to do this ENTIRELY using jQuery!

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Document</title>
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
//   <style>
//     img {
//       max-width: 70%;
//     }

//     .image-center {
//       display: block;
//       margin: 10px auto;
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <h1 id="title" class="text-center">Welcome to my website.</h1>
//     <div class="row">
//       <article class="col-sm-8">
//         <p>My website is very important because I have many important things to say. Here is a picture of a puppy in a cup: </p>
//         <img src="https://cdn.pixabay.com/photo/2015/02/05/12/09/chihuahua-624924_960_720.jpg" alt="">
//         <p>Here are some more thoughts: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum harum labore veritatis, possimus facilis quas repellat, explicabo, ad commodi ipsum quidem nostrum earum pariatur fugit! Magni sunt nulla impedit! Facilis.</p>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, natus qui nostrum libero atque hic distinctio sint facilis nihil possimus minus tenetur deserunt rerum laboriosam cum quisquam doloremque ducimus error.</p>
//         <p>Rerum debitis aspernatur, ipsum animi! Quis ullam dolore blanditiis accusantium eius minus tempore, iure maxime similique vel! Possimus fugiat reprehenderit autem, recusandae quos laudantium nesciunt libero suscipit officia rerum, et.</p>
//         <p>Aliquam harum at soluta id esse perspiciatis, nesciunt corporis nostrum commodi, dolorum, repellat possimus a cumque. Id sed explicabo, quaerat sit esse facere, voluptatem, odit maxime nesciunt eveniet assumenda, error!</p>
//         <p>Consequuntur porro, nobis placeat, labore magni aliquam repellendus autem consequatur hic facere, molestiae dolorum suscipit quos sint, minima ipsum. Quibusdam voluptatem est hic, corporis. Officiis delectus, consectetur harum reiciendis perferendis.</p>
//       </article>
//       <aside class="col-sm-4">
//         <h4>I love lists. Here's why.</h4>
//         <ol>
//           <li>Sometimes they're numbered, and numbers are great.</li>
//           <li>Sometimes they're not, and that's okay too.</li>
//           <li>I don't have the attention span to read paragraphs.</li>
//           <li>Hey look, there's a puppy!</li>
//         </ol>
//       </aside>
//     </div>
//     <div class="row">
//       <div class="col-sm-4">
//         Red
//         <input class="form-control" type="number" min="0" max="255" step="1" value="255">
//       </div>
//       <div class="col-sm-4">
//         Blue
//         <input class="form-control" type="number" min="0" max="255" step="1" value="255">
//       </div>
//       <div class="col-sm-4">
//         Green
//         <input class="form-control" type="number" min="0" max="255" step="1" value="255">
//       </div>
//     </div>
//   </div>
// <script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>
// </body>
// </html>


1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"

$(document).ready(function(){
  console.log("Let's get ready to party with jQuery!")
})

2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$('article img').addClass('image-center')

3. Remove the last paragraph in the article.

$("article p.last-child").empty();

4. Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.

$('#title').css('font-size, (Math.random() * 100));

5. Add an item to the list; it can say whatever you want.

var newItem = $("<li>")
newItem.text("adding to the list")
$('ol').append(newItem)

6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.

$('aside').empty()
var paragraph = $("<p>")
paragraph.text("sorry for the list")
$('aside').append(paragraph)

7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

var text = $('.form-control')
var red = text.eq(0).val();
var blue = text.eq(1).val();
var green = text.eq(2).val();
$(".row").css(background-color, "rgb(red+ "," + green + "," +blue)")


8. Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function(image) {
  $(image.target).remove()
});

