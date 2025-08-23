// function fetchdata(){
//     return 'data'
// }

// const dataPromises = fetchdata()
// console.log(dataPromises)


/**  await keyword return also wrapping the promises 
  * output ->>Promise { 'data' }
  * async ->> always return a promises 
*/
async function fetchdata(){
    return 'data'
}
// const dataPromises = fetchdata()
// console.log(dataPromises)

// dataPromises.then(function(result){
//     console.log("ans in then block",result);
// })



// control async function using callback & async/await and see difference
//aysnc function
const p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolved using async await")
    }, 3000);
    
})

// using callback
 function fetchdata(){
     p.then(function(result){
        console.log("promise resolved ",result)
        console.log("Create impact")
     })
 }

 //using async and await
async function handlePromise(){
    const val = await p; // waiting for the resolved data from resolved
    console.log(val);
    console.log("Create Impact")


    const val2 = await p; // no wait for again 3 second
    //  because await P already settled total time only 3 second    
    console.log(val2)
}

//fetchdata();
//handlePromise();



// see Test function
//console.log(fetchdata());
// async function test(){
//     const data = await fetchdata()
//     console.log("Data",data)
// }
//test();





//after break 
// if using await outside async show syntax error



//predict output for test1,2,3
function test1(){
    console.log("Test1")
}
const test2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Test2")
    },1)
})

function test3(){
    console.log("Test3")
}
//await maintain the order
async function getdata (){
    const data = await test2
    console.log(data)
    console.log("inside aysnc fucntion")
}

//test1()
//getdata()
//test3()


//output
//Test1
// Test3
// Test2
// inside aysnc fucntion





//Handle error or reject status
function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink =="Coffee"){
            resolve("Order for coffee placed")
        }else{
            reject("We only placed for coffee")
        }
    })
}

//if coffee so placed order and server
function processOrder(orderPlaced){
    return new Promise(function(resolve,reject){
       resolve("Order placed and served")
    })
}


//if coffee served then generate the bill
function generatebill(processOrder){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            console.log("Bill generated");
            resolve(`${processOrder} and bill generate with 200rs`);
        },1000)
    })
}



//chaining 
//placeOrder("Coffee")
// .then (function(orderStatus){
//     console.log(orderStatus)
//     return process(orderStatus)
// })
// .then (function(processStatus){
//     console.log(processStatus);
//     return generatebill(processStatus)
// })
// .then(function(bill){
//     console.log(bill);
// })




//placeOrder('tea')
//resolve 
// .then (function(orderStatus){
//     console.log(orderStatus);
// })
// //reject
// .catch(function(err){
//     console.log("err",err);
// })





//using Async Await more cleaner and readable code
async function serveOrder() {
    const orderStatus = await placeOrder("Coffee");
    console.log(orderStatus);
    const processStatus = await processOrder(orderStatus);
    console.log(processStatus);
    const bill = await generatebill(processStatus);
    console.log(bill)
}
//serveOrder();



//using async await in handle error 

async function serveOrder2() {
    try{
        //same code 
        const orderStatus = await placeOrder("Tea");
        console.log(orderStatus);
        const processStatus = await processOrder(orderStatus);
        console.log(processStatus);
        const bill = await generatebill(processStatus);
        console.log(bill)
    }
    catch (error){
        console.log('Error', error);
    }
}

serveOrder2()





