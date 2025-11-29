function add(a,b,...c){
    console.log(a,b, ...c); // here it is Rest operator it is not spread operator and rest opertor will work only at last in parameter
    
}

add(1,2,3, 33,44,5,6,8);