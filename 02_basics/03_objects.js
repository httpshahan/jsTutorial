// singleton object - only one instance of object is created in memory and shared across the application
// Object.create - create an object from another object

// object literals - create an object with key value pair, key is always string and value can be anything

const mySym = Symbol("key1") // symbol is a unique identifier, it is not string, it is a primitive data type


const JsUser = {
    name: "Shahan",
    "full name": "Shahan Ahmad",
    [mySym]: "mykey1", // symbol as a key
    age: 20,
    location: "Peshawar Pakistan",
    email: "shani@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shani@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shani@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());