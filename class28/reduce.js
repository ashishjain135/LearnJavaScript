// const arr = [1,2,3,4,5];
// // const arr1 = []; type error 
// const sum = arr.reduce((acc, curr) => acc+curr);
// //if dont pass intial value 0 so it assume arr[0] is first value
// console.log(sum);




//Reduce method polyfills 
if(!Array.prototype.myReduce){
    //
    Array.prototype.myReduce = function(callback, initialValue){
        if(typeof callback !== 'function'){
            throw new TypeError(`${callback} is not a function `);
        }
        // console.log(arguments.length);
        //this argument help to know how many parameter function invoked 
        if(this.length === 0 && arguments.length === 1){
            throw new TypeError('Reduce of empty array with no initial value');
        }
        //set the initial value
        let acc = initialValue || this[0];
        const startIndex = arguments.length === 1 ? 1:0;
        for(let i = startIndex; i<this.length; i++){
            if(i in this){
                acc  = callback(acc, this[i], i, this);
            }
        }
        return acc;
    }
}

const arr = [1,2,3,4,5];
console.log(arr.myReduce((acc,curr) => acc+curr));

