const a = [12, 14, "sagar", [1, 4, 5], true, "a"];
console.log(a);

// const b = new Array(12, 11, 45);
// console.log(b);


// b.push(238);        // add value at last 
// console.log(b);

// b.pop();            // remove value from last
// console.log(b);

// b.unshift(9);       // add value in the starting
// console.log(b);

// b.shift();          // remove the value from the starting
// console.log(b);

// console.log(b.indexOf(45)); // finout the index of number if not found it will show -1

// const c = [5, 7, 2, 9, 8, 1, 3, 6, 4];
// const d = c.slice(3, 5);
// console.log(d);


// const e = c.splice(3, 5); // portion of array we can add to the array but it will change the original array
// console.log(e);


const A = [12, 15, [69,23,43,45, [23,5], 'a'], "ab", 69 ,a];
const B = A.flat(1);
console.log(B)

const C = A.flat(Infinity);
console.log(C);
