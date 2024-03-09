// var c = 300 
{} // -> scope
// local and global scope

let a = 300
if (true){
    let a =10;
    const b = 20;
    // console.log("INNER:", a);

}
// console.log(a);  // a is not defined
// console.log(b);  /// b is not defined
// console.log(c);  // 30 this is the reason why we not use var

//nested scope
function one(){
    const username = "hitesh"
    function two(){
        const website="yutbe"
        // console.log(username);
    }
    // console.log(website);
   two();
}

// one();

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
     const website = " youtube";
    console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
addone(5)   // no error 

function addone(num){
    return num+1
}

addTwo(5) // as yu have assigned function to addTwo variable and calling before 
/// the reason is called hoisting
const addTwo = function(num){
    return num+2
}
