// API is application programming interface


const dogApi = "https://dog.ceo/api/breeds/image/random";

const dogTar = document.getElementById('dog-target'); 

// remember classes use ('.className'); and id uses ('dog-target');

function getNewDoggo() {
    const promise = fetch(dogApi);
    promise 
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })

        .then(function (processedResponse) {
            // const dogObject = JSON.parse(processedResponse);    using const processingPromise = response.json instead of response.text eliminates the needs to JSON.parse(variable);

            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Random image of awesome doggo";
            dogTar.appendChild(img);
        });
}

document.getElementById('dog-btn').addEventListener("click", getNewDoggo); 



// Let's try another one.


async function getTotalPages() {

    const response = await fetch('https://api.artic.edu/api/v1/artworks?limit=1');
    const data = await response.json();
    const totalArtworks = (data.pagination.total);
    const totalPages = (data.pagination.total_pages);

    console.log(`Total Artworks: ${totalArtworks}`);
    console.log(`Total Pages: ${totalPages}`);

}

getTotalPages();


const artButton = document.getElementById('random-art-btn');
const artTitle = document.getElementById('art-title');
const artImage = document.getElementById('art-image');


const totalArtworks = 129320;

artButton.addEventListener("click", async () => {
    const randomPage = Math.floor(Math.random() * totalArtworks + 1);

    try {
        const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=1`);
        const data = await res.json();

        const artwork = data.data[0];

        if (!artwork || !artwork.image_id) {
            artTitle.textContent = "No image found, trying again...";
            artImage.src = "";
            return;
        }

        const imageId = artwork.image_id;
        const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

        artTitle.textContent = artwork.title;
        artImage.src = imageUrl;
        artImage.alt = artwork.title;
    } catch (error) {
        artTitle.textContent = "Error loading art ";
        artImage.src="";
        console.error("Fetch failed:", error);
    }
});



// Lastly the doggo button use async await



const dURL = "https://dog.ceo/api/breeds/image/random";
const dogs = document.getElementById('dog-target2');

async function getAnotherDoggo() {
    const prom = await fetch(dURL);
    const pResponse = await prom.json();
    const img = document.createElement("img");
    img.src = pResponse.message;
    img.alt = "Another doggo";
    dogs.appendChild(img);

}

// async function always return promises

document.getElementById('dog-btn2').addEventListener("click", getAnotherDoggo);


// async function always return promises

async function getOccupation() {
    return "Software Engineer";
}

console.log('a promise', getOccupation());

getOccupation().then(function (occupation) {
    console.log("The actual occupation", occupation);
});



// Another version using Await

async function getOccupation() {
    return "Software Engineer";
}


async function logOccu() {
    const job = await getOccupation();
    console.log("Awaited job: ", job);
}

logOccu();



// another example

async function getNames(name) {
    return name;
}

async function getLotsOfNames () {
    const names1 = [
        getNames("Ant"),
        getNames("John"),
        getNames("Sean"),
        getNames("Valeries")
    ]
    return names1;
}

async function logLotsOfNames(name) {
    const nameList = await getLotsOfNames(name);
    console.log("Awaited names: ", nameList);
}

logLotsOfNames();


// anther example this one uses Promise.all

async function getNames(name) {
    return name;
}

async function getLotsOfNames () {
    const names1 = Promise.all([
        getNames("Ant"),
        getNames("John"),
        getNames("Sean"),
        getNames("Valeries")
    ]);
    return names1;
}

async function logLotsOfNames(name) {
    const nameList = await getLotsOfNames(name);
    console.log("Awaited names: ", nameList);
}

logLotsOfNames();