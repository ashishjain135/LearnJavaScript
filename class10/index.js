// lexical scope mean function access variable from where they were defined 
// closure :- function remember its outer variable even after scope ends 



// console.log(a) // hoisting 
// var a = 20
// function test(){
//     console.log("This is a test function")
// }
// test()



// function greet(){
//     console.log(msg)
// }
// greet() // undefined 
// var msg = "hello world!"
// parent()
// function parent(){
//     var a = 10
//     console.log(a)
// }
//parent()
// console.log(a)


// dissecting Scope 


// var msg = 'Hello World';
// greet()
// function greet(){
//     console.log(msg);
// }

// var msg = 'Hello World';
// greet()

// calling nested function
// function greet(){
//     // sayhnw()
//     function sayhnw(){
//         console.log(msg);
//     }
//     sayhnw()
// }
// var msg = "hyy"
// greet()



// move variable out side the function 
// function greet(){
//     var msg = " hello boss"
//     function sayhnw(){
//         console.log("Inner",msg)
//     }
// }
// greet()
// console.log("outer",msg)// msg not defined 




// function parent(){
//     // var a = 20
//     function child(){
//         console.log(a)
//         var a = 20
//         function child1(){
//             // var a = 20
//             console.log(a)
//         }
//         child1()
//     }
//     child()
// }
// parent()



// var, let,const behavior


// if(true){
//     let val = "hello i am in if block "
//     console.log(val);
// }
// console.log(val)// var is not defined referenceErroe



// function greet(){
//     let val = "hello i am in function in block"
//     console.log(val)

// }
// console.log(val)
// greet()



// if(true){
//     var val = "hello i am in if block "
//     console.log(val);
// }
// console.log(val)// in case var --> hello iam in if block 

var val = ' some  msg'
if(true){
    var val = 'some other msg'
    console.log('inside if',val);// shadowing
}
console.log('out side ', val);


