//see this keyword in node.js environment

// console.log("scenario 1");
// console.log(this);//{} ->> module.exports object
 // In Node.js, 'this' at the top level refers to module.exports, which is an empty object by default

 //
//console.log("scenario 2");
function fnGlobal(){
    console.log(this);
}
//fnGlobal(); // global object ->> In Node.js, 'this' inside a regular function refers to the global object

//scenario 3
//console.log("scenario 3");
const obj = {
    fn: function(){
        console.log(this === obj);
    }
}
//obj.fn(); // obj ->> In this case, 'this' refers to the object that called the function
//object it self
//method invocation


//scenario 4
console.log("scenario 4");  
const obj3={
    fn: function(){
        console.log(this);//obj3 //object it self
        const nestedFn = function(){
            console.log(this); // global object
        }
        nestedFn(); //normal function invocation
    }
}
obj3.fn(); // global object ->> In nested functions, 'this' defaults to the global object unless bound otherwise
//method invocation 