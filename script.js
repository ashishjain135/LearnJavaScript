// console.log('Hello from script.js')

// var myfirstvar = "hello from my first variable"
// console.log(myfirstvar)

// myfirstvar = true
// console.log('Changed data',myfirstvar);
// /** Redeclaration */ 
// var myfirstvar = 10;
// console.log(myfirstvar);

// /**
//  * summrise
//  * var -> redeclare and reinitialise
//  * 
//  */
 
// let val= "hello"
// val = "bye"

// // let val = "some other value" // redeclaration not allowed in "var"

// console.log(val);

// const pi = 3.14
// //pi = 3.55 // reassign not allowed 
// console.log(pi)


// let value = "hello"
// value = 123
// console.log(value)

/** Number type */
// let number1 = 12
// let number2 = 23.34

//infinity and NaN
// console.log(22/0) // o/p infinity 
// console.log('abc'/234) // o/p NaN -> not a number

// // easier shoe big number 
// console.log("Ashish networth ", 100_00_00_00_00_000+1234)

// console.log("Mr. musk's networth is 200b", 200e9)
// console.log("millionth of a second 10^-6", 1e-6)

// console.log("123"+10) // 12310
// console.log(+"123"+10) // 133 bcz before + already convert to string 
//console.log("123"-10) // 113 

/** bigint 
 * number can be represent number from -(2^53-1) to +(2^53-1) 64bit representation 
 * bigint can we represent number beyond this range
 * represent bigint by adding n at the end of the number 1n, 2n , ...
 * 
 */


/** Single
 * 1. single quotes -> 'hello'
 * 2. double quotes -> "Hello"
 * 1/2 both quotes are same 
 * 
 * but backticks are used to dynamic string 
 * 3. backticks 
 */
// backticks ` `
const activeUser = 100
const message = `there are ${activeUser} users online`
const message2 = "there are "+ activeUser +" users online"
console.log(message2)
console.log(message)


/**boolean used for comparison
 * 1. true 
 * 2. true 
 * 
  */

// let  $a = 10
// let $b = 20
// if($a>$b){
//     console.log("a big")
// }else{
//     console.log("b big")
// }

/** 
 * null and defined 
 * it is default 
 */
//  var a 
//  console.log(a) // undefined 


// Object
// const user = new Object()
// console.log(user)

// const anotheruser = {}
// console.log(anotheruser)
// 2 different method to initiliaze Object

// const user = {
//     name: "kohli",
//     age: 34,
//     team: "RCB"
//  }
// // console.log(user) // o/p { name: 'kohli', age: 34 }
// // console.log(user.name) // directly access 
// console.log(user.team) //undefined

// user.istopranked = true
// console.log(user.istopranked)

// delete user.age // remove age property
// console.log(user)

// //computed key
// const key = "man of the match"
// user[key] = true
// //console.log(user)
// user["man of the match"] = true
// console.log(user)


// types of operator 
// console.log(typeof undefined)
// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof Symbol('id'))
// console.log(typeof null)
// console.log(typeof function(){})

/** arrays */
// const arr = [1,2,3,4,5]
// const arr1 = [1,function(){},true,"unit"] // stored in Object 
// // index -> key
// // value -> data
// console.log(arr.length)
// console.log(arr1)
// console.log(arr1[-1])


// function myfun(name){
//     var name = '100'
//     console.log( `There are ${name} users online`
//     )
// }
// myfun();





