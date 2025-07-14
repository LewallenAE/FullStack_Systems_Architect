function addSum(num1, num2) {
return num1 + num2;
}

console.log(addSum(5,7));
console.log(addSum(20,5));
console.log(addSum(20.3,40.2));


function pirateSpeak(param1, param2, param3, param4, param5, param6) {

    return `Hello Captain ${param1}, welcome aboard the ${param2}, in the middle of the ${param3} ocean.\nIt's a beautiful day being ${param4} degrees, but watch out for the ${param5} it might just eat ya for ${param6}`;
}

console.log(pirateSpeak("Jack Sparrow", "Black Pearl", "Arctic", "75", "Kraken", "a snack!"));


// Old way is const burp = function () {};


// New way
const burp = (param1, param2, param3) => {

    return `The cat named ${param1}, ${param2}, like a ${param3}`; // if just using return

}

console.log(burp("Garfield", "purrs", "kitten")); // you must use console.log



const burp2 = (param1, param2, param3) => {

    console.log(`The cat named ${param1}, ${param2}, like a ${param3}`); // if you have console.log

}

burp2("Garfield", "purrs", "kitten"); // you don't need it here again.