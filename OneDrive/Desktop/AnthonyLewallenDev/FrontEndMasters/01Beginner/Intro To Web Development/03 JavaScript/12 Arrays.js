// Arrays

const daysOfWeek = [   // this is an array of strings
    "Sunday",   // 0
    "Monday",   // 1
    "Tuesday",  // 2
    "Wednesday",// 3
    "Thursday", // 4
    "Friday",   // 5
    "Saturday", // 6
];


for (let i = 0; i < daysOfWeek.length; i++) {
    const index = i; // This instantiates a variable called index that equals i the current value of the index in the loop.
    // please remember that this is delcared locally and is not accessible outside of this loop unless we had delcared it as a method or outside of the loop.
    console.log(`The index is: ${index} and the day of the week is: ${daysOfWeek[index]}`);
    console.log(`The index is: ${i} and the day of the week is: ${daysOfWeek[i]}`);
    // This will output the index and the day of the week for each day in the days
}

for (let i = 0; i < daysOfWeek.length; i++) {
 
    console.log(`The index is: ${i} and the day of the week is: ${daysOfWeek[i]}`);
    // This will output the index and the day of the week for each day in the days
}


// Don't forget that in VS code you can type apreviously declared variable with a dot and see a list of other methods and things you can apply to it.
// daysOfWeek.       // This will show you all the methods and properties available for the daysOfWeek array.


const arrayOfNums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
];

console.log(daysOfWeek[3]); // Outputs: Wednesday. The value at index 3 starting from 0.
console.log(arrayOfNums[5]); // Outputs: 6. The value at index 5 starting from 0

const mixedArray = [
    "Hello", // string
    0, // number
    true, // boolean
    null, // null value
    undefined, // undefined value

]

console.log(mixedArray); // Outputs the whole array. from index 0 - 4.  The length of an array is n, and the number of indexes is n - 1, 
// so if you have say 12 items in an array, the total length is 12, but the indexes are from 0 to n- 1 = 0 to (12 - 1) = 11.


const arrayOfMostEverything = [
    "hello",
    0,
    true,
    null,
    undefined,
    {
        name: "Anthony",
        age: 30,
        isDeveloper: true,
        hobbies: ["coding", "gaming", "reading"]
    },
];

console.log(arrayOfMostEverything[5].name);
console.log(arrayOfMostEverything);


const object = {
    name: "Anthony",
    age: 39,
    isDeveloper: true,
    hobbies: ["coding", "gaming", "reading"]
};

const arrayWithPreviouslyDeclaredObject = [
    "hello",
    0,
    true,
    null,
    undefined,
    object,
];

// This does not work console.log(arrayWithPreviouslyDeclaredObject.object.name);
console.log(arrayWithPreviouslyDeclaredObject[5].name); // outputs the entire Object 
console.log(arrayWithPreviouslyDeclaredObject[5].hobbies[2]); // Outputs: reading. Accessing the hobbies array inside the object at index 5 of the main array.
console.log(arrayWithPreviouslyDeclaredObject);

console.log(`With a template literal: ${arrayWithPreviouslyDeclaredObject[5].name} is ${arrayWithPreviouslyDeclaredObject[5].age} years old and is a developer: ${arrayWithPreviouslyDeclaredObject[5].isDeveloper}`);


const keyValuePairArrayObject = {
    name: "Anthony",
    age: 39,
    isDeveloper: true,
    hobbies: ["coding", "gaming", "reading"],
}

const keyValuePairArray = [
    ["name", "Anthony"],
    ["age", 39],
    ["isDeveloper", true],
    ["hobbies","coding"],
    ["gaming", "reading"],
    ["object", keyValuePairArrayObject],

];

const courses = [
    { teacher: "Anthony Lewallen", course: "The All Around Developer"},
    { teacher: "Brian Holt", course: "Introduction to Web Development"},
];

courses.push({ teacher: "Brian Cranston", course: "How to be Breaking Bad"});
console.log(courses);


