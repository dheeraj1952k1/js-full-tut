// array
const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);


//Array Methods
myArr.push(9)
myArr.pop()
myArr.unshift(10)   // inserted at first location
myArr.shift() //  remove the unshifted value 

console.log(myArr.includes(9))
console.log(myArr.indexOf(28));

const newArr = myArr.join() // it binds the array and convert it to string
console.log(myArr);
console.log(typeof newArr);

slice, splice

console.log("A", myArr);
console.log(myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2= myArr.splice(1,3)  // splice manipulate the original array 
console.log("C", myArr);

console.log(myn2)


const marvel_heroes = ["thor", "Ironman","Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); // therefore arrays can take any data
console.log(marvel_heroes[3][1]);

const allheroes = marvel_heroes.concat(dc_heroes)  // returns new arrays without modifying the original array
console.log(allheroes);

spread operator actually spread the arrays
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_an_array = another_array.flat(Infinity) // it combine all element in one arrays
console.log(real_an_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));

let score1 = 100
let  score2 = 200
let score3 = 300
let score4;
console.log(Array.of(score1, score2, score3, score4));