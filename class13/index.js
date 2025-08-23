// we want to read file1 then write file 2



// const fs = require('fs')

// fs.readFile('f1.txt',function(err,data){
//     if(err){
//         console.log(err)
//         return 
//     }else{
//     const processedData = data.toString();
//     fs.writeFile('f2.txt',processedData,function(err){
//         if(err){
//             console.log(err);
//             return;
//         }else{
//             console.log("file written successfully");
//         }
//     });
//     }
// });





//10 such async operation 
// example ->> fetch the user data -> then get his/her posts ->>  then get his/her comments

// function fetchUser(userId){
//     fetchUserData(userId, (err, userData)=>{
//         if(err) handleError("fetching user data",err);
//         else{
//             log("user data fetched", userData);
//             fetchUserPost(userData.id ,(err, posts)=>{
//                 if(err) handleError("fetching user post",err);
//                 else{
//                     log("post fetched", posts);
//                     posts.forEach((post) => {
//                         fetchCommentsByPost(post.id,(err,comments)=>{
//                             if(err) handleError("fetching comment for post",err,post.id);
//                             else{
//                                 log("comments for post",post.id,comments);
//                             }
//          // Potensial for more nested callback here 
//                         }) 
//                     })
//                 }
//             })
//         }
//     })
    
// }

// // Auxiliary function to streamline pseudo-code
//     function handleError(action, err,postId = ""){
//         console.log(`Error ${action}:`,postId,err);

//     }
//     function log(message,data){
//         console.log(message,data);
//     }








/** 


// Promises
const coinTossPromise = new Promise(function(resolve,reject){
    //execute code -->> async Operation

    setTimeout( function(){
        const isHead = Math.random() >0.5;
        
        if(isHead){
            // successful 
            resolve("head");
        }else{
            // failure
            reject(
                "Tail --> coin toss resulted in tails, considered as a failure"
            );
        }
    },1000);
});



// consuming the Promise


// const coinToss = function(success,fail){
//     setTimeout(function(){
//         if(true){
//             success()
//         }else{
//             fail()
//         }
//     },1000);
// }


/**
 * Consume a promise
 * 
 * to consume/ use the promise we attach callback using 
 * .then()  if callback successful 
 * .catch() if fail // on erroe 
 * .finally() excute after promise // always executed 
 * 
 */

/** 
coinTossPromise
.then(function(result){
    console.log(result) // on successful / resolve
})
.catch(function(err){
    console.log(err) // on error
})
.finally(function(){
    console.log("Promise settled"); // always executed 
})

*/



/**
 * Chaining of Promise
 * why use -> No callback hell
 */


/**
 * if clean room & eat food 
 * both condition stisfy so i got the candy 
 * 
 */




/** 
//error handling in chaining
const cleanRoom = function(){
    return new Promise(function(resolve,reject){
        if(Math.random()>0.5){
            resolve("I cleaned the room");
        }else{
            //50% chance fail
            reject("I did not cleaned the room");
        }
    });
};
const eatFood = function(message){
    return new Promise(function(resolve,reject){
        if(Math.random()>0.5){
            resolve(message + " I ate My food")
        }else{
            reject("Don't link this food")
        }
    });
};

let getCandy = function(message){
    return new Promise(function(resolve,reject){
        resolve(message+"now you get Candy");
    })
}

cleanRoom()
.then(function(result){
    console.log(result)
    return eatFood(result);
})
.then(function(result){
    console.log(result);
    return getCandy(result);
})
.then(function(result){
    console.log("Finished"+result);
})

.catch(function(error){
    console.log("Error:"+error+" No Candies for you ");
});


*/



/** Read file using Promises (Concurrent)
 * 
 * You can use this method when you want to 
 * read multiple config files, logs,
 * or templates together, and they don’t depend 
 * on each other.
 */

// normal way to read file 
 const fs = require("fs");
// fs.readFile("f1.txt",cb);

// function cb(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("This is file 1 data ->> "+ data);
//     }
// }



//read file by using Promises 
 
// let promiseReadfile = fs.promises.readFile("f1.txt");

// promiseReadfile.then(function(data){
//     console.log("This is file data -> "+data);
// })

// promiseReadfile.catch(function(err){
//     console.log("this is your error -> "+err);
// });

/** Read multifile using promises   */


// print randomly or cuncurrent order
// let promiseReadfile1 = fs.promises.readFile('f1.txt');
// let promiseReadfile2 = fs.promises.readFile('f2.txt');
// let promiseReadfile3 = fs.promises.readFile('f3.txt');

// for file1 
// promiseReadfile1
// .then(function(data){
//     console.log("This is file1 Data - >"+data)
// }).catch(function(err){
//     console.log("file1 error-> "+err);
// })

// promiseReadfile2
// .then(function(data){
//     console.log("This is your file2 data -> " +data);
// })
// .catch(function(err){
//     console.log("error file 2 -> "+ err);
// })

// promiseReadfile3
// .then(function(data){
//     console.log("this is file 3 data -> "+data)
// })
// .catch(function(err){
//     console.log("error in file 3 -> "+err);
// })

// arrow event loop mechanism so you see random order files 







/** Event loop mechanism 
 * clean the code 
 * using callback 
 * no guarantee order
 */

let f1p = fs.promises.readFile('f1.txt');
let f2p = fs.promises.readFile('f2.txt');
let f3p = fs.promises.readFile('f3.txt');

function readFileCallback(data){
    console.log("this is the data -> "+data);
}
function handleError(err){
    console.log("this is my error -> "+err);
}

f1p.then(readFileCallback);
f2p.then(readFileCallback);
f3p.then(readFileCallback); 


f1p.catch(handleError);
f2p.catch(handleError);
f3p.catch(handleError);