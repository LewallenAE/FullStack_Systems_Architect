// These are if, for, while, switch, and do while statements.


const myAge = 39;
const isForty = myAge === 40; // this will evaluate as true or false and is false in this specific case.


let message ="";


 if (myAge > 18 && isForty) {
    message = "You are an adult.....legally anyway.";
} else if (myAge >= 18 && !isForty) {
    message = "You are legally an adult.....lol....but you are not 40 yet. Man-child. LOL.";
}

document.getElementById("age-if-loop").textContent = message;


let counterMessage = "";

let count = 0;

while (count < 40) {
    counterMessage += `<li>Count is: ${count}.</li>`;
    count ++;
     
}

document.getElementById("count-while-loop").innerHTML = counterMessage;