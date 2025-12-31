//in bind methid we can use polyfills to create our own bind method
//most famous interview topic 
Function.prototype.myBind = function(context, ...boundArgs){

    //check whether this is function or not
    if(typeof this !== 'function'){
        throw new Error("error");
    }

    const targetFunction = this; //this refer to the function on which myBind is called

    return function(...args){ 
        return targetFunction.call(context,...boundArgs, ...args); //combining both boundArgs and args
        //...args is possible to return something in future
    }
}

const user ={
    name: "Alice",
    age: 28,
    greet: function(msg){
        console.log(`I am ${this.name},and ${this.age}, ${msg}`);
    }
}

const user2 = {
    name: "Bob",
    age: 32,
}


const boundGreet = user.greet.myBind(user);
// boundGreet("Hello there!"); //I am Alice,and 28, Hello there!

boundGreet("Hello")