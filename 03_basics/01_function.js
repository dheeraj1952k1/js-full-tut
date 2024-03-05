function add(num1, num2){
    console.log(num1+num2);
}

function add(num1, num2){
        // let result = num1+num2;
        // return result;
        return num1+num2;
  }

const result = add(3, null);
console.log("result:", result);


function loginUserMessage(username="sam"){
    if(username === undefined || !username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());  // undefined just logged in


// in shopping cart

function calculateCartPrice(val1,...rest){ // rest operator is used to add any no of item to cart
     return rest;
}

console.log(calculateCartPrice(100));
console.log(calculateCartPrice(100,200));
console.log(calculateCartPrice(100,200,300,400,500));

// passing obj in func
const user = {
    username:"hitesh",
    price:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

console.log(handleobject(user))

// passing obj directly
handleobject({
    username:"Sam",
    price:399
})

// passing arr in fun

const arr = [200,300,400,600]

function returnSecondArray(getArray){
    return getArray[1];
}

// console.log(returnSecondArray(arr));
console.log(returnSecondArray([100,500,1000]));