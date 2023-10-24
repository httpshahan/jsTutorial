const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //add array inside array as a single element
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // merge two array into a new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // merge two array into a new array, spread operator, make the array open

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // nested array

const real_another_array = another_array.flat(Infinity) // spreadout the nested array into a single array
console.log(real_another_array);


console.log(Array.isArray("Shahan")) // check if it is an array
console.log(Array.from("Shahan")) // convert string into array
console.log(Array.from({name: "shahan"})) // interesting, giving empty array

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3)); // create an array from variables