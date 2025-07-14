

// for loop example


let forLoopMessage = "";
for (let i = 0; i < 200; i += 5) {
    forLoopMessage += `This is a loop iteration number is: ${i} <br>`;
}



document.getElementById("for-loop").innerHTML = forLoopMessage;

// while loop example
let count = 0;

while (count < 40) {
    counterMessage += `<li>Count is: ${count}.</li>`;
    count ++;
     
}


// do while loop example, these always run at least once

let numberCount = 10;

do {
    console.log(`This is the current count and will run at least once as a do-while loop: ${numberCount}`); // This runs once

} while (numberCount > 10);


let numberCount2 = 10;

do {
    console.log(`This is the current count and will run at least once as a do-while loop: ${numberCount2}`); // This runs once
    numberCount2--; // Decrement by one.

} while (numberCount2 > -10);



// Switch statement example

let dayCondition = "December 25th";

switch (dayCondition) {
    case "October 25th":
        console.log("Happy Birthday!");
        break;
    case "January 1st":
        console.log("Happy New Year!");
        break;
    case "December 25th":
        console.log("Merry Christmas!");
        break;
    default:
        console.log("Have a great day!");
}