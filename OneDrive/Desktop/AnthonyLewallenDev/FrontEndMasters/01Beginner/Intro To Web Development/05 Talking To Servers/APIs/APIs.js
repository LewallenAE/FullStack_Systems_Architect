// API is application programming interface


const dogApi = "https://dog.ceo/api/breeds/image/random";

const dogTar = document.getElementById('dog-target'); 

// remember classes use ('.className'); and id uses ('dog-target');

function getNewDoggo() {
    const promise = fetch(dogApi);
    promise 
        .then(function(response) {
            const processingPromise = response.text();
            return processingPromise;
        })

        .then(function (processedResponse) {
            const dogObject = JSON.parse(processedResponse);
            const img = document.createElement("img");
            img.src = dogObject.message;
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