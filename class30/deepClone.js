//how create a deep Copy of object like array function , any function nested function ,array

function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }
    if(obj instanceof Array){
        const copy = [] //[1,[2,3,{3,4}]]
        for(let i = 0; i<obj.length; i++){
            copy[i] = deepClone(obj[1]);
        }
        return copy;
    }
    if(obj instanceof Function){
        return obj.bind({}); // bind return a new function
    }
    if(obj instanceof Object){
        const copy = {};
        for(let key in obj){
            copy[key] = deepClone(obj[key]);
        }
        return copy;
    }
    throw new Error("unable to Copy. its type is not support")
}