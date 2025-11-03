//OOPs Concepts - Object Oriented Programming

//Encapsulation
//Creating a Car Object using Function Constructor
// function car(make, model){
//     this.make = make;
//     this.model = model;
//     this.displayInfo = function(){
//         console.log(`Car Make: ${this.make}, Model: ${this.model}`);
//     }
// }

// const myCar = new car('Toyota', 'Corolla');
// myCar.displayInfo(); // Car Make: Toyota, Model: Corolla




//compare this keyword in browser environment
//scenario 1
console.log("scenario 1");
console.log(this); // window object ->> In browsers, 'this' at the top level refers to the global window object


//scenario 2
console.log("scenario 2");  
function fnGlobal(){
    console.log(this);
}   
fnGlobal(); // window object ->> In browsers, 'this' inside a regular function refers to the global window object

//scenario 3
console.log("scenario 3");
const obj = {
    prop:"I am a property of objs",
    method: function(){
        console.log(this); //obj ->> In this case, 'this' refers to the object that called the function
        console.log(this.prop);
    }
}   
obj.method(); //method invocation
// obj ->> In this case, 'this' refers to the object that called the function


//scenario 4   
console.log("scenario 4");
const obj2 = {
    prop:"I am a property of obj2",
    method: function(){
        console.log(this); //obj2 //object it self
        const nestedFn = function(){
            console.log(this); // window object
            //console.log(this.prop); //undefined
        }   
        nestedFn(); //normal function invocation
    }
}
window.prop="I am a window prop";
obj2.method(); //method invocation