//class start
//first we use polyfills in Map method
/**
 * how actual map method works??
 * (value, index, arr) these three params are accepted callbackfn
 * 
 * (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
 * 
 * 
 */
const arr = [1,2,4]
const result = arr.map((item) => item*2);
// console.log(result); // 2,4,8  // converting new arr


/**
 * implementations
 * 
 * check if Array.prototype.myMap is already defined 
 * 
 * */
if(!Array.prototype.myMap){
    //if not so define the method on Array prototype 
    Array.prototype.myMap = function(callback, thisArg){
        //step 1 check is callback is a function
        if(typeof callback !== 'function'){
            throw new TypeError(`${callback} is not a function`)
        }
        // step 2 -> create a output array size == same as imput arrray
        const val = new Array(this.length);
        /**
         * loop through the input array
         * call the callback function with the current item, index and the input array
         * store the result in the output array 
         * 
         * 
         * this.length ->> means input length
         */

        //step 3 -> iterate over the array 
        for(let i =0; i<this.length; i++){
            if(i in this){
                //process the input value with the callback function
                //step 4> execute 'callback ' for each element, considering 'thisArg' 

                var context = thisArg ? thisArg :this  
                var mappedValue = callback.call(context,this[i],i, this); // callback ->(item -> => item*2);

                //step 5-> push the result of the callback into the result array 
                val[i] = mappedValue; //1 -> 1, 2->4 , 4 ->8 //[2,4,8]
                
                //step 6-> return the new array 
    
            }
        }
        return val;
    };
}


//sparse array
//sparse array is a  when most element are undefined 
//sparse matrix when most off the element are 0
//
const arr1 = [1,2,3,4];
delete(arr1[1]); 
// console.log(arr1); //now array [ 1, <1 empty item>, 3, 4 ]
const ans = arr1.myMap(item => item*2);
console.log(ans);




// const arr2 = [1,2,4];
// const data = arr2.myMap((item) => item *2)
// console.log(data);