// // object literals

const mySym = Symbol("key1")
const jsUser = {
    name:"Hitesh",
    "fullName":"Choudhary",
    age:18,
    [mySym]:"mykey1",
    location:"Jaipur",
    email:"hitesh@google.com",
    isloogedIn:false,
    lastLoginDays:["monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com"
Object.freeze(jsUser) // now you can not change jsuer
jsUser.email = "hitesh@microsoft.com"

console.log(jsUser.email);
console.log(jsUser);

// //adding function to object

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // string interpolation
}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser);


// objects parts 2 ++++**********************
// const tinderUser = new Object(); // singleton object
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser  = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

console.log({obj1, obj2})

// const obj3 = Object.assign({},obj1, obj2);
const obj3 = {...obj1, ...obj2}  // spread operator is used to meger two object
console.log(obj3);

console.log(Object.keys(tinderUser)); // return keys in array
console.log(Object.values(tinderUser));// return values in array
console.log(Object.entries(tinderUser));// every key value is termed as array item
console.log(tinderUser.hasOwnProperty('isloggedIn'));


// video 3 object destructuring
const course = {
    coursename:"js in hindi",
    priceL:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor:instructor} = course;
console.log(courseInstructor);
console.log(instructor);

//object destructuring in react]
const navbar =({company}) =>{

}

navbar(company = "hitesh")
console.log(navbar);

// object destructuring in API

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]