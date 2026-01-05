Promise.myRace = function(promises){
    return new Promise((resolve, reject) => {
        if(promises.length === 0){
            throw new TypeError("No promises to resolved");
        }
        promises.forEach(promise =>{
            //no matter who win resolved or reject 
            Promise.resolve(promise)
            .then(resolve)
            .catch(reject);
        })
    })
}


function QuickResolve(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Quick Resolve");
        }, 5000);
    });
}

function slowResolveOrFastReject(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("reject");
        },100);
        setTimeout(() => {
            resolve("Slow reject or Fast resolve");
        },2000);
    })
}

Promise.myRace([QuickResolve(), slowResolveOrFastReject()])
.then((result) => {
    console.log("result :", result);
})

.catch((error) =>{
    console.error("An error occured: ",error);
})