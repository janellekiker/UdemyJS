'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');


function logger() {
    console.log('My name is Josas');
}

// calling, running or invoking the function 
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)


// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}
const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'Janelle'));



function cutFruitPiece(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPiece(apples);
    const orangePieces = cutFruitPiece(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
fruitProcessor(2, 3);
console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1996, 'Janelle'));
console.log(yearsUntilRetirement(1970, 'Mike'));



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Another way to make an array
const y = new Array(1991, 1984, 2008, 2020);

// Call a specific variable 
console.log(friends[0]);
console.log(friends[2]);

// Knowing the length
console.log(friends.length);
// Getting the last element
console.log(friends[friends.length - 1]);

// Mutate the array
friends[2] = 'Jay';
console.log(friends);

// You can mix types in arrays
const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



// Add element to end of an array
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends)

// Add element to beginning of array
friends.unshift('John');
console.log(friends);

// Remove last element
friends.pop();
console.log(friends);

// Remove first element
friends.shift();
console.log(friends);

// Tells placement of array
console.log(friends.indexOf('Steven'));

// If it includes
console.log(friends.includes('Steven'));

// Conditionals
if (friends.includes('Peter')) {
    console.log('You have a friend called Peter')
}



// Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// Dot Notation
console.log(jonas.lastName);

// Bracket Notation
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `)


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function () {
    //console.log(this);
    // return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.age);
console.log(jonas.getSummary());


// for loop keeps running while conditions are TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}



const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //Filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])

    // Or could be
    // ages[i] = 2037 - years[i];
}
console.log(ages);

// Continue and break statements
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    // skipped any values that aren't strings
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER  ---')
for (let i = 0; i < jonas.length; i++) {
    // once it gets to first number, it stops, nothing else is printed
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

// loop backwards
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep}`)
    }
}



//normal for loop
for (let rep = 1; rep <= 10; rep++) {
    //console.log(`Lifting weights repetition ${rep}`);
}

// while loop, same result
let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end')
    };
}
*/