const scope = "Variables that are declared outside of a function are globally accessible";
const scope2 = "Variables that are declared inside of functions are only accessible inside of the function";



function sayWhat () {
    const sayWhat2 = "Say whaaaaat?";
    console.log(sayWhat2);
}

sayWhat(); // notice this calls the function but it doesn't call the local variable..inside.

// ReferenceError doesn't exist outside of the function
//console.log(sayWhat2); 


//This shows that if a variable is not declared globally, you CAN access it but just not DIRECTLY, you can only access it through the method by calling the method.




// Convoluted Example.


const A = "A";
//let F;

function doStuff(B) {
    console.log(B);
    const C = "C";
    let H = "H";
    if (1+1 === 2) {
        const D = "D";
        H = "Somethiong Else";
    }
    console.log(D); // not accessible because it's undefined
    console.log(H); // this is okay because it was defined inside the doStuff method and outside of the if block.
}

// F = "F";

let E = 0;
while (E < 3) {
    E++;
    console.log(A);
    const G = "G";
}

doStuff("B");
console.log(B);
console.log(C);
console.log(F);

let F;
F = "F";
console.log(F);