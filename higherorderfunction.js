const A = [1,11,54,89,23,34];

A.forEach((i) =>
     
    console.log(i)
    
);

// for each never return, it used only for loop and it never make changes to the original array, it only used for print 


// forEach loop is the replacement of the for loop


// for loop

for(i=0;i<A.length;i++)
{
    console.log(A[i]);
    
}


// map loop returns a new array

A.map((i)=>
console.log(i)
)

//filter it return array but for filter only

A.filter((i)=>
console.log(i)
)