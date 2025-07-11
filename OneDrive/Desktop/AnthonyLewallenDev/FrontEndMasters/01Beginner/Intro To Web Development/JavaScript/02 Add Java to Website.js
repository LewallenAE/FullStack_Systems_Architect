// Let's add Java to a website!


const monthlyRent = 637.73;
const yearlyRent = monthlyRent * 12;

document.getElementById("rent-summary").textContent = `If your monthly rent is: ${monthlyRent}, then your yearly rent is: ${yearlyRent}.`; // these are back ticks not single quote.

const firstName = "Anthony";
const lastName = "Lewallen";
document.getElementById("name-summary").textContent = `My name is: ${firstName} ${lastName}.`; // these are back ticks not single quote.

const dog1 = "Daisy a Labradane";
const dog2 = "Samhain a Rotty and German Shepard mix";
const dog3 = "Lala Border Collie, German Shepard, and Great Pyrenees mix";
const dog4 = "Zeus Border Collie, German Shepard, and Great Pyrenees mix";
const dog5 = "Loki Border Collie, German Shepard, and Great Pyrenees mix";
const dog6 = "Oso Great Pyrenees";
const dogInfo = "Loki, Lala, and Zeus are sibilings from the same litter. Daisy and Ein are from the shelter, and Oso is from a Breeder.";

document.getElementById("MyDog'sNames").textContent = `I have 6 dogs their names are: ${dog1}. ${dog2}, ${dog3}, ${dog4}, ${dog5}, and ${dog6}. ${dogInfo}`;