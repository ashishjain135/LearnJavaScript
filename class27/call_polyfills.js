const car = {
    name:"Mercedes",
    color:"white"
}

function buyCar(price){
    console.log(`I bought a ${this.color} ${this.name} car for ${price} dollars.`);
}

buyCar.call(car,50000)

Function.prototype.myCall = function(context={}, ...args){ //...args is rest operator combining all arguments into array

    //here we need to check whether this is function or not 
    //or ensure that myCall is called on function only
    if(typeof this !== 'function'){
        throw new Error("error");
    }
    // context.myFunction = this; //this refer to the function on which myCall is called // buyCar function
    // context.myFunction(...args); //...args is spread operator to convert array into comma separated values


    //avoid above two line simply
    this(...args);
}

buyCar.myCall(car,60000 , 89, 90); //90,90 are ignored as buyCar take only one argument