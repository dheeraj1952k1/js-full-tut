const user = {
    Username:"hitesh",
    price:999,

    // here 'this' is called current context
    welcomeMessage: function(){
        // console.log(`${this.Username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage();
// user.Username = "Dheeraj";
// user.welcomeMessage(); // here this represent a current context

// console.log(this); // this represent an object in node 


// function chai(){
//     let username= "hitesh"
//     console.log(this.username);
// }

// chai(); // output undefined i.e does not use this in function

// const chai = function () {
//     let username= "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//         let username= "hitesh"
//         console.log(this.username);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

const addTwo = (num1,num2) =>  num1+num2;
console.log(addTwo(3,4));

const myArray = [2,5,7,8,9]

// myArray.forEach(() => {})