// class 9 function execution and hoisting



// tradinal method of declare function 
// function sb(drink,qty){
//     console.log(`I want the ${qty} & ${drink}`)
// }
// sb('coffee',5)

// varible assign function 
// function execution 

// const sbu = function(drink,qty){
// console.log(`I want ${drink} and ${qty}`)
// }
// sbu('coffee', 5)




// code execution
// var a = 2
// var b = 5

// function add(a, b){
//     var ans = a+b
//     return ans
// }
// let add1 = add(5,3)
// let add2 = add(5,6)

// console.log(add1)
// console.log(add2)



// Hoisting
// console.log(msg)
// // var msg = "hello"


// greet()
// function greet(){
//     console.log(msg,"have a nice day");
// }
// //console.log(msg)
// // var msg = "hello"
// // greet()


// var someval ="Hello World"
// // console.log(msg)
// var msg = "hello"


// function greet(){
//     console.log(msg,"happy new year")
// }
// console.log(msg)
// greet()




// interview question 
// var a = 200;
// {
//    a = 400;

// }
// let b = a;
// {
//     b = -400
// }
// console.log(b) // --> -400 update outer b



var a = 200;
{
   var a = 400;

}
let b = a;
{
    let b = -400
}
console.log(b)