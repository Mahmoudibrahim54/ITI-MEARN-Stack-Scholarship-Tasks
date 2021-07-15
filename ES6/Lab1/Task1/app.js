let a = 10;
let b = 5;
console.log(`before : a = ${a}, b = ${b}`);
[a,b] = [b,a];

console.log(`after : a = ${a}, b = ${b}`);