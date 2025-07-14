// Pretending this came from a server

const responseFromServer = `{"name": "Luna", "age": 10, "breed": "Great Dane", "location": {"city": "Philadelphia", "state": "Pennsylvania"}}`;


console.log(responseFromServer);

const responseObject = JSON.parse(responseFromServer);

console.log(responseObject.name);
console.log(responseObject.location.state);
console.log(responseObject.location.city);
console.log(responseObject);



// Let's stringify something using actual JS to JSON


const dinner = {
    appetizer: "Fried Mushrooms",
    drinks: ["Unsweetened Iced-Tea", "Coffee with creamer"],
    preCourse: "Asian style Chicken Wonton Tacos",
    mainCourse: ["Char-siu", "House Fried Rice", "Egg Foo Young"],
    dessert: "Chinese sweet buns",
    palateCleanser: "Fortune Cookie",

    location: {
        city: "Somewhere",
        state: "No-name state",
        restaurant: {
            name: "Orient Express"
        },
    },
};

console.log(dinner);
console.log(dinner.location.restaurant.name);

const objDinner = JSON.stringify(dinner);
console.log(objDinner);

const getObjDinner = document.getElementById("code-block");
getObjDinner.innerText = JSON.stringify(dinner, null, 2);