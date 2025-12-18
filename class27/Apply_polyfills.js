const car ={
    name:"Mercedes",
    color:"white"
}
function buyCar(price){
    console.log(`I bought a ${this.color} ${this.name} car for ${price} dollars.`);
}

Function.prototype.myApply = function(context={}, argsArray=[]){
    //here we need to check whether this is function or not 
    //or ensure that myApply is called on function only
    if(typeof this !== 'function'){
        throw new Error("error");
    }

    //check whether argsArray is array or not
    if(!Array.isArray(argsArray)){
        throw new Error("need to pass array as second argument");
    }

    context.myFunction = this; //this refer to the function on which myApply is called // buyCar function
    context.myFunction(...argsArray); //...args is spread operator to convert array into comma separated values

    // this(...argsArray);

}
buyCar.myApply(car, [60000]);