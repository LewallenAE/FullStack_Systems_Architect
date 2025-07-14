// Taking our object from the previous Objects.js file example.

const anthony = {  // renamed to anthony
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
    },


    // This is new code from the previous file.

    /*

    There are three ways to define a function in an object:
        1. getAddres: () => { };    this is modern but does not support using "this" keyword.
        2. getAddress() { };        this is the modern form of number 3:
        3. getAddress: function() { };    this is pretty much deprecated but it still works and is useful for older code bases and legacy systems.

    */

    getAddress: () => {
        return `
        ${anthony.personalInfo.address.street}
        ${anthony.personalInfo.address.city}
        ${anthony.personalInfo.address.state}, ${anthony.personalInfo.address.zip}`;
    }
    };

    console.log(anthony.getAddress());





    // Modern way

    // Taking our object from the previous Objects.js file example.

const anthony2 = {  // renamed to anthony
    Occupation: "Coding-warlock",
    Experience: "Since the beginning of the internet",

    /*
    startsCoding: () => {
        return "Anthony starts coding at the speed of whatever!"
    },
    */

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
    },


    // This is new code from the previous file.

    /*

    There are three ways to define a function in an object:
        1. getAddres: () => { };    this is modern but does not support using "this" keyword.
        2. getAddress() { };        this is the modern form of number 3:
        3. getAddress: function() { };    this is pretty much deprecated but it still works and is useful for older code bases and legacy systems.

    */

    getAddress() {
        return `
        ${this.personalInfo.address.street}
        ${this.personalInfo.address.city}
        ${this.personalInfo.address.state}, ${this.personalInfo.address.zip}`;
    }
    };

    const huh = anthony2.getAddress(); // you can even assign it a new variable. This is how scaling works.
    console.log(huh);

    const anthonyOccupation = anthony2.Occupation;  // or it can even be used this way
    console.log(anthonyOccupation);
    console.log(`Anthony's occupation is: ${anthonyOccupation}`);

    console.log(anthony2.getAddress());
    console.log(anthony2.startsCoding());

    const me = {
  name: "Anthony",
  getAddress() {
    return this.name + "'s address";
  }
};

const fn = me.getAddress; // this is missing the () for the method so you have to use bind or call it with the object context
console.log(fn()); // ❌ this === undefined in strict mode
