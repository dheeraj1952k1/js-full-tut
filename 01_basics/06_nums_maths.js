const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const ONumber = 1123.575445
// console.log(ONumber.toPrecision(3));

const humdreds = 10000000
// console.log(humdreds.toLocaleString('en-IN'));

// ++++++++++++++ MATHS ++++++++++++++++++++++
console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(-4.6666));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(-4,5,546));
// console.log(Math.max(-4,74));


// console.log(Math.random());  // value bet 0 and 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1)) + min);