// start class  OOps-4 Call apply and their polyfills

// const person1 = {
//     name: "John",
//     age: 25,
//     printNameAndAge:function(city, country){
//         //console.log(this);
//         console.log(`My name is ${this.name} and my age is ${this.age} and i live in ${city}, ${country}`);       
//     }
// }

// person1.printNameAndAge("Indore", "India");

// const person2 = {
//     name: "Doe",
//     age: 30
// }
// //person2.printNameAndAge();

// //any method for printNameAndAge for person2


// // Call method
// //person1.printNameAndAge.call(person2,"Delhi ", "India");


// //apply method ->>> 
// // in case of apply we need to pass arguments in array forms
// //but when you just pass context it will be same as call method
// person1.printNameAndAge.apply(person2,["Delhi ", "India"]);






//apply useful

// const numbers = [5,6,2,3,7,1,9];

//console.log("Maximum number is :" ,Math.max(numbers)); //it give Nan because it expect comma separated values not array
//here we use apply method

// console.log("Maximum number is :" ,Math.max.apply(null, numbers)); //first argument is context here we dont have any context so we pass null


// console.log(Math.max(...numbers)); //spread operator also do same work as apply method
// console.log(Math.max.call(null, ...numbers));  //... is a spread operator
// console.log(Math.max.apply(null,numbers));