const button = document.querySelector(".event-button");

const box = document.querySelector(".red-box");


let isGrown = false; // tracks the box state


button.addEventListener("click", function () {

    box.style.transition = 'all 2s ease';
    if (!isGrown) {
    alert("Hey there! See the Red Box Grow? That is how event listeners work. Click the button again to \"ungrow\" the box");
    box.style.width = '400px';
    box.style.height = '400px';
    box.style.fontFamily = 'Comic Sans MS';
    box.innerText = "This is a black box with lime text";
    box.style.backgroundColor = 'black';
    box.style.color = 'lime';
    box.classList.add("hero-glow");
    } else {
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.fontFamily = 'Comic Sans MS';
        box.style.backgroundColor = 'red';
        box.innerText = "This is a red box with white text";
        box.style.color = 'white';
        box.classList.remove("hero-glow");
    }
    
    isGrown = !isGrown;

});

const input = document.querySelector('.input-to');
const paragraph = document.querySelector('.p-input-copy');

input.addEventListener("keyup", function () {
    paragraph.innerText = input.value;
});


const boxInput = document.querySelector(".colored-box");
const boxParagraph = document.querySelector(".color-input");

boxParagraph.addEventListener("change", function () {
    boxInput.style.backgroundColor = boxParagraph.value;
    boxInput.style.transition = 'all 2s ease';
});


// You don't need to assign things to a variable but if you are going to reuse it then make sure you do.
document.querySelector(".button-container")
.addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`);
});