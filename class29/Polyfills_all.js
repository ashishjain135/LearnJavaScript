/**
 * call promise.all when alll input promises are resolved 
 * in other words call the resolve callback when all input promises are resolved 
 * count the number of resolved promises
 */


//nyall constructor function 
Promise.myall = function(values){ // take input from array and return a promise
    const promise = new Promise((resolve, reject) => {

        //check if array is empty
        //     if(values.length === 0){
        //    this.reject(new AggregateError("No Promises in array"))
        //}
        const result = [] // to store the resolved values
        let total  = 0; // to keep track of the number of resolved promise
            values.forEach((item, index) => {
            //item are promise
            //index need because we know multiple promises we not not sure there order p1, p2, p3  resolve order mapped value for their associative result

            Promise.resolve(item)
            .then(res=>{
                result[index] = res
                total++;
                if(total === values.length){
                    resolve(result);
                }
            })
            .catch(err=>{
                reject(err);
            });

        });
    })
    return promise
}

let promise1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// let promise2 = [
//     Promise.resolve(10),
//     Promise.reject(new Error("Failed").message),
//     Promise.resolve(30)
// ]
let promise3 = []; // if empty array so return aggregateError



//Promise.myall(promise1)
// Promise.myall(promise2)
Promise.myall(promise3)
.then(result =>{
    console.log("Result: ", result);
})
.catch(error => {
    console.error("Error :", error);
})
