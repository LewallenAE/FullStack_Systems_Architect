The basic overview of how a website works

The user interacts and requests something (the client) which is sent to the server confirmed or not found and sent back to the client. In a nuthsell anyway.

Now what we are interested in right now is how this is read.


Basically in terms of HTML (and not jsx or react) the html is read from top to bottom and once it hits the 

<script> insert javascript name here.js </script> it stop immediately and doesn't load anything else.


Say we have a redsquare.

<div class="red-square"></div>

in css we have

.red-square {
    height: 100px;
    width: 100px;
    background-color: red;
}

In JS we can then

let mySquare = document.querySelector('.red-square');  and voila this communicates our HTML with the DOM and JS and we now hae resuable reloadable code inside of our web browswer.

