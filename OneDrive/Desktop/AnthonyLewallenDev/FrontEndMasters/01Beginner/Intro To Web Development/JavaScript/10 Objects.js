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