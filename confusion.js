const A = {
    "name":"Sagar",
    "roll" : 238,
    "desig":"ASE"
}

// Object.freeze(A);

//A["name"]= "Mern Stack";  // it will freeze the object to perform the operation

// console.log(A);


const B = {
    "name":"Sagar",
    "roll" : 238,
    "desig":"ASE"
}

const C = Object.assign({},A,B); // concatenation of object

const D = {...A, ...B}; // using Spread operator

console.log(C,D);


const {name, roll, design} = A;
console.log(name);
console.log(roll);
