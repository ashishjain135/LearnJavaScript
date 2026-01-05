
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
            reject({userId:1,posts:['post1','post2']});
        }, 2000);
    })
}

Promise.allSettled([fetchUserData(), fetchUserPosts()])
.then((result) => {
    console.log("User Data: ",result[0]);
    console.log("user Post ",result[1]);
})
.catch((error) =>{
    console.error("An error occured: ", error);
})