'use strict' //enable strict mode
function test(){
    const a = 5; // ReferenceError: a is not defined in strict mode
    console.log(a);
}
//test();
//console.log(a);


//scenario 1
console.log("scenario 1");
console.log(this);//{} ->> module.exports object  ->> fetch global object in strict mode

console.log("scenario 2");
function fnGlobal(){
    console.log(this); //showing undefined in strict mode
}   
fnGlobal(); // global object ->> In Node.js, 'this' inside a regular function refers to the global object


//scenario 3
console.log("scenario 3");
const obj = {
    fn: function(){
        console.log(this); 
    }
}   
obj.fn(); // obj ->> In this case, 'this' refers to the object that called the function
//object it self
//no change in method invocation strict or non strict mode    



//scenario 4
console.log("scenario 4");
const obj3={
    fn: function(){
        console.log(this);// obj3 //object it self
        const nestedFn = function(){
            console.log(this); // undefined in strict mode
        }   
        nestedFn(); //normal function invocation
    }       
}
obj3.fn(); // global object ->> In nested functions, 'this' defaults to the global object unless bound otherwise
//method invocation