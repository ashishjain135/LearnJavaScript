// start class

// const obj= {}
// console.log(obj.toString());// know toString

//const arr = [1, 2, 3];
// console.log(arr.join(">")); // 1,2,3 
// //know the join method


//see example of prototype methods

const user = {
    name:"kohli",
    age:34,
}

//console.log(Object(user)); // [ 'name', 'age' ]
// also inbuild object protype methods are available

//console.log(arr.toString()); // 1,2,3   
//console.log(arr) // to know array prototype methods



// const animal = {
//     eats : true,
//     sleep: true,
//     walk(){
//         console.log("animal walk");
//     }

// }

//console.log(animal);
//default object prototype methods are abvailable with bunch of methods

// const rabbit = {
//     areCute : true,
// }
// //specia key
// rabbit.__proto__ = animal; // rabbit linked to animal  //all properties of animal are available to rabbit


//console.log(rabbit);





// const herbivore = {
//     eatMeat : "naah",
//     __proto__: animal
// }

// const carnivore = { 
//     eatMeat :'yes',
//     __proto__: animal
// }

// // const rabbit = {
// //     canJump : true,
// //     __proto__: herbivore
// // }

// const tiger = {
//     canKill : true,
//     __proto__: carnivore
// }


//console.log(rabbit); // true  // from animal
//inherited property rabbit -> herbivore -> animal
//this is example of multilevel inheritance or chaining of inheritance


// console.log(tiger.eatMeat); // definitely yes  // own property
// console.log(rabbit.eatMeat); // naah  // inherited property from herbivore


//console.log(tiger.dance);
//undefined  // not found in tiger nor carnivore nor animal


//console.log(tiger.walk()); // animal walk  // inherited method from animal



//chaing of prototype __proto__
//console.log(rabbit.__proto__.__proto__.__proto__); // herbivore  // direct prototype

//__proto__  always point to object or either null


//console.log(typeof null); // bug in js or exeption // object





//4 point god element
// const obj = {

// }
//console.log(obj);


//const arr1 = [1,2,3];
//console.log(arr1);



//traversing key of object
//console.log(Object.keys(animal)); //Object.keys will give direct keys of  object 



//for .. in loop is uesd to loop over all the keys of object 
// for(let key in rabbit){
//     //console.log(key);
// }


// function User(name){
//     this.name = name; //constructor function
//     this.msg = function(){ //method 
//         console.log(`hello ${this.name}`);
//     }   
// }

// const user1 = new User("kohli");
// const user2 = new User("dhoni");

// console.log(user1.msg()); // User { name: 'kohli', msg: [Function (anonymous)] }
// console.log(user2.msg()); // User { name: 'dhoni', msg: [Function (anonymous)] }



//console.log(user1.msg === user2.msg); // false  beacause different memory allocated
//each time new method is created for each object
//problem of memory leakage 
//solution : prototype method (DRY) do not repeat yourself


/**
 * all function in js have a prototype property
 */


// function BetterUser(name){
//     this.name = name; //constructor function
// }
// BetterUser.prototype.msg = function(){ //method added to prototype
//     console.log(`hello ${this.name}`);
// }

// const user3 = new BetterUser("rohit");
// const user4 = new BetterUser("hardik");
//console.log(user3.msg === user4.msg); // true




/**
 * Other built in prototype methods
 */

// const arr = [1,2,3]; //new array()
//console.log(arr); // [ 1, 2, 3 ]
// array prototype methods are available
// const str = "hello world";// new string()
//console.log(str); // hello world
//string prototype methods are available



/**
 * Primitive data types
 */

// const num = 10.324242;
// console.log(num.toFixed(2)); // 10.32 wrapper the variable with Number object and call the method after execution go back to primitive // 10.32







//Object.create
//define the prototype object
//it used to create object with the specified prototype object and properties
//we define the prototype object first and then create objects based on that prototype


// const carPrototype = {
//     displayInfo: function(){
//         return `this is a ${this.year} ${this.model} car.`;
//     }
// }

// const car1 = Object.create(carPrototype);
// car1.model = "Toyota";
// car1.year = 2020;

// const car2 = Object.create(carPrototype);
// car2.model = "Honda";
// car2.year = 2022;       

// console.log(car1.displayInfo()); // this is a 2020 Toyota car.
// console.log(car2.displayInfo()); // this is a 2022 Honda car.


// console.log(car1.__proto__ === carPrototype); // true





// const obj1 = {
//     name:"Sample Object"
// }

// obj1.__proto__ = null; // it break the prototype chain so toString method is not available
// console.log(obj1.toString()); // [object Object]  default object prototype method



// function Animal(){
//     this.eats = true;
// }

// console.log(Animal.prototype.constructor); // true

// const rabbit = new Animal();
// console.log("rabbit ", rabbit instanceof Animal); // true





//Question 1 
// function Animal(){

// }
// Animal.prototype.speak = function(){
//     console.log("sound");
// }

// function Dog(){

// }
// Dog.prototype = Object.create(Animal.prototype); // dog prototype linked to animal prototype

// const dog = new Dog();
// console.log(dog)

// console.log(dog.constructor.name); // Animal  // why because we have linked dog prototype to animal prototype so constructor points to animal




//Question 2
function Animal(){

}
Animal.prototype.speak = function(){
    console.log("sound");
}

function Dog(){

}
Dog.prototype = Object.create(Animal.prototype); // dog prototype linked to animal prototype

Dog.prototype.constructor = Dog; // reset the constructor to Dog
const dog = new Dog();
console.log(dog)// Dog {}   why because constructor is reset to Dog but prototype is still linked to animal prototype

console.log(dog.constructor.name);





//Question 3
// function Rabbit(){}
// Rabbit.prototype = {
//     eats : true
// }

// let rabbit = new Rabbit();

// Rabbit.prototype = {}; // changing the prototype object after creating the object

// console.log(rabbit.eats); // true  // why because prototype is linked at the time of object creation so changing prototype later will not affect the existing object

// //but Rabbit.prototype.eats = false; // this will affect the existing object because we are modifying the existing prototype object

// const bunny = new Rabbit();
// console.log(bunny.eats); // true // why because prototype is linked at the time of object creation so changing prototype later will not affect the existing object





//question 4
const animal ={
    jumps:null
}
const rabbit = {
    __proto__: animal,
    jumps:true
}

alert(rabbit.jumps); // true  // own property

delete rabbit.jumps;

alert(rabbit.jumps); // null  // inherited property from animal 

delete animal.jumps;

alert(rabbit.jumps); // undefined  // not found in rabbit nor animal




// end class