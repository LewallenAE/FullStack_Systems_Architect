console.log("🚀Calculator Running!🚀")


const display = document.querySelector(".result-screen");

// This selects all of the div in the calculator class instead of just the the whole calculator class.
const buttons = document.querySelectorAll(".calculator .button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value || button.innerHTML || button.innerText;

        switch (value) {
    case "C":
        display.value = "";
        break;
    case "backspace":
        display.value = display.value.slice(0,-1);
        break;
    case "=":  // This should work now
        display.value = eval(display.value);
        break;
    case "x":  // Changed from "x" to "×"
        display.value +="*";
        break;
    case "÷":  // This should already work
        display.value += "/";
        break;
    case "+":
        display.value += "+";
        break;
    case "-":  // Changed from "-" to "−" (HTML minus entity)
        display.value += "-";
        break;
    default:
        display.value += value;
}
    });
});