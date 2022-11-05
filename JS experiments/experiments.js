const monthlyRent = 500;

let yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);

const myName = 'Maria Smickersgill';

const firstName = 'Maria';
const lastName = 'Smickersgill';

const greeting = `Hello, ${firstName} ${lastName}! How are you?`;

// console.log(greeting); 

const isTheSkyBlue = true;

// const friendsAtYourParty = 10;

// if (friendsAtYourParty === 0) {
//     console.log('Cool, now I have all the nachos to myself');
// } else if (friendsAtYourParty <= 4) {
//     console.log('Perfect amount to play some Mario Kart');
// } else {
//     console.log('Wooooo! Play the dance music');
// }

let friendsAtYourParty = 0;

while (friendsAtYourParty < 10) {
    console.log(friendsAtYourParty);
    friendsAtYourParty = friendsAtYourParty + 1;
}

// for loop 
for (let i = 0; i <= 10; i++) {
    friendsAtYourParty++
}

// console.log(friendsAtYourParty);

function addFive(number) {
    const someVariable = "you can't see me outside this function";
    console.log(anotherVariable);
    return number + 5;
}

if (true) {
    const yetAnotherVariable = 'only in scope for the if statement';
    console.log(yetAnotherVariable);
}

const anotherVariable = 'something else';

// addFive(10);
// console.log(someVariable);

/*
LOGS: 
only in scope for the if statement                          experiments.js:49:13
something else                                              experiments.js:43:13
Uncaught ReferenceError: someVariable is not defined        experiments.js:55:1
*/

const primeNumbers = [10, 1, 2, 3, 5, 7, 11, 13, 17];

// console.log(primeNumbers.sort((a, b) => { return a > b }));         // Min to Max
// console.log(primeNumbers.sort((a, b) => { return a < b }));         // Max to Min 

