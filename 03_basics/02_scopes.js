// var c = 300 
{} // -> scope


let a = 300
if (true){
    let a =10;
    const b = 20;
    console.log("INNER:", a);

}
console.log(a);  // a is not defined
// console.log(b);  /// b is not defined
// console.log(c);  // 30 this is the reason why we not use var