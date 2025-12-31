var arr = [1,2,3,4];
var res = arr.filter((item) => item>2)
console.log(res); 

//in this case a filter return a subSet of Array whose length is less than original array

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(callback, thisArg){
        //step 1-> if callback not a function 
        if(typeof callback !== 'function'){
            throw new TypeError(`${callback} is not a function`);
        }

        const result = []
        //step 3 -> loop through the input array
        for(let i = 0; i<this.length; i++){
            //check sparse array
            if(i in this){
                var context = thisArg ? thisArg: this;
                
                if(callback.call(context, this[i], i, this)){
                    result.push(this[i]);
                }
            }    
        }
        return result;
    }
    //
}


const arr1 = [1,2,3,0, 4];
delete arr1[1];
const rese = arr1.filter((item) => item >2);
console.log(res);