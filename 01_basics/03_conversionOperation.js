let scoreString = "shani"
let scoreNum = 33
let scoreMix = "33abc"

//console.log(typeof scoreString);
//console.log(typeof(scoreNum));

let valueInNumber = Number(scoreMix);
console.log(typeof valueInNumber);
console.log("Convert 33abc to Num: " + valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "shani"
let isLoggedInNum = 2
let isLoggedInString = "0"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedInNum = Boolean(isLoggedInNum)
let booleanIsLoggedInString = Boolean(isLoggedInString)
  console.log("String with haracters" + booleanIsLoggedIn);
  console.log("Num greater then 1 " + booleanIsLoggedInNum);
  console.log(`String with 0 => ${booleanIsLoggedInString}`);

// 1 => true; 0 => false
// "" => false
// "shani" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " shani"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
