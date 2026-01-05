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

Promise.race([QuickResolve(), slowResolveOrFastReject()])
.then((result) => {
    console.log("result :", result);
})

.catch((error) =>{
    console.error("An error occured: ",error);
})