const Object = {
    name: "Anthony Lewallen",
    city: "Hereford",   // These are key value pairs.
    state: "Arizona",
    DOB: "October 25, 1985",
    favoriteFood: "🍔",
    favoriteMovie: "None",
    age: "39",
    occupation: "Aspiring whatever",

}

console.log(Object);
console.log(Object.name);
console.log(Object.city);
console.log(Object.favoriteFood);
console.log(Object.age);


const angie = {
    name: "Angie",
    age: "20 - 40",
};

const john = {
    name: "Johnny Cash",
    age: "50 - 100",
};

if (angie.age === "20 - 42") {
    console.log(`${angie.name}, ${angie.age} probably likes Taylor Swift`);
} else if (john.name === "Johnny Cas") {
    console.log(`The name is ${john.name} but I ain't the singer`);
} else {
    console.log("Nothing to see here.");
}

// Objects can contain other objects


const johnnyCash = {
    name: "Jonny Cash",
    age: 71,
    songs: ["Ring of Fire", "Hurt", "Folsom Prison Blues"],
    playGuitar() {
        console.log("Plays guitar with a southerny twang!");
    }
}

johnnyCash.playGuitar();

const person = {
    Occupation: "Coding-warlock",
    Experience: "Since the beginning of the internet",

    /*
    startsCoding: () => {
        return "Anthony starts coding at the speed of whatever!"
    },*/

    startsCoding:() => "Anthony starts coding at the speed of whatever!",

    // The commented code below would have to be called outside of the other template literal code as   person.startsCoding().
    /* startsCoding: () => {
        console.log("Anthony starts coding at the speed of whatever!");
    } */   

    personalInfo:{
        name: "Anthony",
        age: 39,
    address: {
            street: "12345 E. Coder Street",
            city: "Code-city",
            state: "Code-state",
            zip: "12345",
        }
    }
    };

// Using string concatenation
console.log("Person one's name: " + person.personalInfo.name + "\nPerson one's city: " + person.personalInfo.address.city); // this can get messy in larger scaled code systtems.

// using template literals which is preferred and much cleaner
console.log(`Person one's name: ${person.personalInfo.name},
Person one's city: ${person.personalInfo.address.city},
Occupation: ${person.Occupation},
Experience: ${person.Experience}!,
${person.startsCoding()}`);


// person.StartsCoding();

