// const monthlyRent = 500;

// console.log(monthlyRent)
// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);

// const firstName = "Sarah";
// const lastName = "Jameson";

// const sentence = "Hello " + firstName + " " + lastName + "! How are you?!";
// const sentenceImproved = `Hello ${firstName} ${lastName}! How're you?!`;

// console.log(sentenceImproved)

// const isTheSkyBlue = True;
// console.log(isTheSkyBlue)

// const num = 5.0001;
// console.log(num)

// const isSkyBlue = false;

// if (isSkyBlue) {
//     greeting = "Boy, it is a nice day for a walk!";
// } else {
//     greeting = "Maybe, it's best to stay in. The sky isn't looking great.";
// }

// console.log(greeting)


// if (2 + 2 === 4) {
//     console.log("yay")
// } else {
//     console.log("Not possible!")
// }

let friendsAtParty = 0

// if (friendsAtParty === 0) {
//     console.log("Whew! I can eat all the food by myself.")
// } else if (friendsAtParty <= 4) {
//     console.log("Cool! We can play some Mario Kart!")
// } else {
//     console.log("Time to get crunk!!")
// }

// while (friendsAtParty <= 10) {
//     console.log(friendsAtParty);
//     friendsAtParty = friendsAtParty + 1;
// }

// console.log(friendsAtParty)

// for (let i = 0; i < 10; i+=1) {
//     friendsAtParty += 1
//     console.log(friendsAtParty)
// }

/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

const character = 's'
const timesToRepeat = 5
let newString = ''

for (let i = 0; i <= timesToRepeat; i++) {
  console.log(character)
  newString += character
}

console.log(newString)