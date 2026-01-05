/**
 * promise combinators used when multiple async function,api call simultenously
 * 
 * 
 * promise.all  
 * promise.allsettled
 * promise.race
 * promise.any
 * 
 * 
 * 
 * promise.all
 * i/p : Array of promise
 * o/p : promise : result is an array of resolved values
 * Rejection->. If any of the promise is rejected , the promise returned by  promise, all is rejected
 */

function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({userId:1,name:"john Doe", age:30});
        },500);
    })
}

function fetchUserPosts(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({userId:1,posts:['post1','post2']});
        }, 2000);
    })
}

Promise.all([fetchUserData(), fetchUserPosts()])
.then((result) => {
    console.log("User Data: ",result[0]);
    console.log("user Post ",result[1]);
})
.catch((error) =>{
    console.error("An error occured: ", error);
})