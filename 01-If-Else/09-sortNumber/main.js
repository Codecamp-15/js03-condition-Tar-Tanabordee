// let x =Number(prompt('Enter number 1'));
// let y =Number(prompt('Enter number 2'));
// let z =Number(prompt('Enter number 3')*1);

// CASE1 : x มากที่สุด
// --> 1A ; y มากกว่า z
// --> 2A ; z มากกว่า y
// CASE2 : y มากสุด
// CASE2 : z มากสุด
// && = and
// DRY Principle : Don't Repeat Yourself

// let max;

// if(x > y && x > z) {
//     console.log(`Max = ${x}`);
// } else if (y > x && y > z) {
//     console.log(`MAX = ${y}`);
// } else if (z > x && z >y) {
//     console.log(`MAX = ${z}`);
// }

// console.log(`Max = ${max}`);

// CASE1 : x มากที่สุด
// --> 1A ; y มากกว่า z
// --> 2A ; z มากกว่า y
// CASE2 : y มากสุด
// CASE2 : z มากสุด
// && = and
// DRY Principle : Don't Repeat Yourself

let max;
let mid;
let min;

if (x > y && x > z) {
    max = x;
    if (y > z) {
        mid = y;
        min = z;
    }else{
        mid = z;
        min = y;
    }
} else if (y > x && y > z) {
    max = y;
    if (x > z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    }
} else if (z > x && z > y) {
    max = z;
    if (x > y) {
        mid = x;
        min = y;
    }
        mid = z;
        min = x;
}

console.log(`${max} : ${mid} : ${min}`);