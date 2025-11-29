//filter it return array but for filter only
const A = [1, 11, 54, 89, 23, 34];

const B = A.filter((i) => {
    return i > 23
}
)

// if condition is true then it will return the same value

console.log(B);
console.log(A);
