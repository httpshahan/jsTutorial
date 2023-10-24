// const tinderUser = new Object()  // object constructor, create an empty object, not recommended

const tinderUser = {} // object literal, create an empty object, recommended

// add properties to object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {                 // nested object
        userfullname: {             // nested object
            firstname: "shahan",
            lastname: "ahmad"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // access nested object

const obj1 = {1: "a", 2: "b"}  
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }      // create an object from two objects, problem is that it will create nested object

// const obj3 = Object.assign({}, obj1, obj2, obj4) // merge two objects into a new object

const obj3 = {...obj1, ...obj2}  // merge two objects into a new object, spread operator, recommended
// console.log(obj3);


// array of objects
const users = [ 
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // get all keys of object, return an array
// console.log(Object.values(tinderUser));  // get all values of object, return an array
// console.log(Object.entries(tinderUser)); // get all entries of object, return an array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if object has a property



const course = {
    coursename: "js course",
    price: "999",
    courseInstructor: "shani"
}

// course.courseInstructor
//object destructuring, extract values from object
const {courseInstructor: instructor} = course  // rename the key, ease of use

// console.log(courseInstructor);
console.log(instructor);

// json - javascript object notation, API - application programming interface 

// {
//     "name": "shani",
//     "coursename": "js course",
//     "price": "free"
// }

// json is a string, it is not an object, it is a data format, it is a standard way of sending data from one place to another
[ 
    {},
    {},
    {}
]