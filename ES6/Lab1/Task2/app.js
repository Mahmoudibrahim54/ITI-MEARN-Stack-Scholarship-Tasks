


let minMax = (...w)=>{
let max = Math.max(...w);
let min = Math.min(...w);
return `min is ${min}, max is ${max}`;
}


console.log(minMax(10,20,40,5,15));