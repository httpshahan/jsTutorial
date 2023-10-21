const name = "shani"
const repoCount = 5

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shani-cusit-pk')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


 console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) 
console.log(newString); // shan

const anotherString = gameName.slice(-14, 5)
console.log(anotherString);

const newStringOne = "   shani    "
console.log(newStringOne);
console.log(newStringOne.trim()); //ignoring the spaces



console.log(gameName.split('-'));