// ===============================
// DOM SELECTION
// ===============================

// Select an element by its ID
const header = document.getElementById("main-header"); // returns one element

// Select the first element matching a CSS selector
const firstParagraph = document.querySelector("p"); // returns first <p>

// Select all elements matching a CSS selector
const allParagraphs = document.querySelectorAll("p"); // returns NodeList

// Select elements by class name
const items = document.getElementsByClassName("list-item"); // live HTMLCollection

// Select elements by tag name
const divs = document.getElementsByTagName("div");


// ===============================
// DOM CONTENT MANIPULATION
// ===============================

// Change the text content of an element
header.textContent = "Welcome to the DOM Playground";

// Replace the HTML inside an element
firstParagraph.innerHTML = "<strong>DOM Manipulation is powerful!</strong>";

// Update an input value
const nameInput = document.getElementById("name");
nameInput.value = "Anthony";


// ===============================
// DOM ATTRIBUTES
// ===============================

// Set a new attribute
header.setAttribute("data-role", "main-title");

// Get an existing attribute
const role = header.getAttribute("data-role");

// Remove an attribute
header.removeAttribute("data-role");


// ===============================
// DOM STYLE MANIPULATION
// ===============================

// Inline styling with JS
header.style.color = "crimson";
header.style.backgroundColor = "beige";
header.style.padding = "10px";

// Add, remove, or toggle classes
header.classList.add("highlight");
header.classList.remove("highlight");
header.classList.toggle("shadow");
const hasClass = header.classList.contains("shadow"); // returns true/false


// ===============================
// DOM EVENTS
// ===============================

const clickButton = document.getElementById("click-me");

// Add a click listener to a button
clickButton.addEventListener("click", () => {
  alert("Button was clicked!");
});

// Keyboard event
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});


// ===============================
// DOM CREATION + INSERTION
// ===============================

// Create a new element
const newListItem = document.createElement("li");
newListItem.textContent = "I am new here";

// Append it to an existing UL
const list = document.querySelector("ul");
list.appendChild(newListItem); // Adds it as the last child

// Prepend it to the top
list.prepend(newListItem); // Adds it as the first child

// Remove an element
// newListItem.remove(); // uncomment to remove


// ===============================
// DOM LOOPING (NodeList)
// ===============================

// Loop through all <p> tags and add a class
allParagraphs.forEach((p) => {
  p.classList.add("styled-text");
});


// ===============================
// DOM FORM EXAMPLE
// ===============================

const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop actual form submission

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form submitted with:", email, message);

  // Show confirmation message
  document.getElementById("form-response").textContent = "Thanks for contacting us!";
});
