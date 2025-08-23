// funtinal 
// function printname(cb1, cb2,cb3){
//     console.log("cb",cb1)//printlastname as a refrence
//     console.log("Ashish")
//     /**
//      * Calling received callback function 
//      */
//     cb1()
//     cb2()
//     cb3()
// }
// function printLastname(){
//     console.log("Jain")
// }
// function printage(){
//     console.log(20)
// }
// function printCity(){
//     console.log("Sagar")
// }

// const { raw } = require("express")

// printname(printLastname,printage,printCity)// ashish jain
// printname(printage)




// let name = "shubham"
// function greet(name){
//     return `hello ${name}`
// }
// function farewell(name){
//     return `Goodbye , ${name}`
// }
// function createSalutation (name, fn){
//     console.log(fn(name))
// }

// createSalutation("shubham", greet)




// Pure & impure function



// var c = 0; 
// function sum(a,b){
//     //return a+b+c++ // impure function 
//     return a+b     // pure function 

// }
// console.log(sum(2,3))//5
// console.log(sum(2,3))//6



// impure function 
// function getRandomNumber(){
//     return Math.random()
// }
// console.log(getRandomNumber())




// higher Order function

// short excersice 
/** 
 * we are given radius of diffrent cicles[1,2,3,4,5]
 * we need to find area and return the result array 
 */


// area 

 const myradiusArray = [2,3,4,5]
// function calculateArea(radiusarr){
//     const result =[]
//     for(let i = 0; i<radiusarr.length; i++){
//         result.push(Math.PI*radiusarr[i]*radiusarr[i])
//     }
//     return result;
// }

// console.log(calculateArea(myradiusArray))


// perameter 
// function calculateperameter(radiusarr){
//     const result =[]
//     for(let i = 0; i<radiusarr.length; i++){
//         result.push(2 * Math.PI*radiusarr[i])
//     }
//     return result;
// }
// console.log(calculateperameter(myradiusArray))

//

// Diameter
// function calculateDiameter(radiusarr){
//     const result =[]
//     for(let i = 0; i<radiusarr.length; i++){
//         result.push(2 *radiusarr[i])
//     }
//     return result;
// }
// console.log(calculateDiameter(myradiusArray))

// same function repeat only formula changer



/** 
 * DRY --> Don't repeat yourself 
 * 
 * higher Order function 
 */

// 


// higher Order function 
// function circleArea(radius){
//     return Math.PI * radius *radius;
// }
// function circleCircumference(radius){
//     return 2*Math.PI*radius;
// }
// function circleDiameter(radius){
//     return 2*radius;
// }

// function calculate(myradiusArray, logic){
//     let result =[]
//     for(let i = 0; i<myradiusArray.length; i++){
//         result.push(logic(myradiusArray[i]));

//     }
//     return result;
// }

// let finalArea = calculate(myradiusArray, circleArea);
// console.log('This is a area array ->',finalArea);

// let finalcircumfrence = calculate(myradiusArray, circleCircumference);
// console.log("circumfrence of radius --> ", finalcircumfrence);

// let finalDiameter = calculate(myradiusArray, circleDiameter);
// console.log("Diameter of radius -->", finalDiameter);



/**
 * functinal programming method for arrays()
 * map
 * filter
 * reduce
 
*/


// map --> transfrom each element in an array
// if store N^2 in arr[i]



// brute force 
 let arr = [1,2,3,4,5,6]
// let squareArr = []
// for(let i = 0; i< arr.length; i++){
//     squareArr.push(arr[i]* arr[i])

// }

// console.log(squareArr)

// using map

// let squaredValues = arr.map(function(num){
//     return num*num;
// })
// console.log(squaredValues);



// use filter -->> used for selected elements that meets a certain conditions 
// let evenarr = arr.filter(function(num){
//     return num %2 == 0;
// })
// console.log(evenarr)


// use reduce -->> transfroming list into single value 

const totalsum = arr.reduce(function(accumulator, currentValue){
    accumulator += currentValue
    return accumulator; 
},0)
// accumulator = previous value set 0 ; 
console.log(totalsum)


















































