// Iterating Method 1:
const cities = [
    "Chicago",
    "Seattle",
    "Philadelphia",
    "Phoenix",
    "Madison",
    "Milwaukee",
    "San Diego",
    "Los Angeles",
    "New York",
    "Buffalo",
    "Honolulu",
    "Amsterdamn",
    "Rotterdam",
    "London",
    "Rome",
    "Paris",
    "Lyon",
];

// If you want it sorted alphabetically first use cities.sort()

cities.sort();

for (let i = 0;i < cities.length ; i++) {
    console.log(`${i}: ${cities[i]}`);
}

// Method 2:

let timesCalled = 0;
function logOfCities (cities) {
    console.log(cities);
    timesCalled++;
}

cities.forEach(logOfCities);

// I personally think that Method 1 is more useful.