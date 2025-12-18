//bind method -> it returns a new function with this keyword set to the provided value

const user = {
    name:"Alice",
    age:28,
    greet : function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user2 = {
    name:"Bob",
    age:32
}

/**
 * bind can't ne be used to immediately invoke the function.
 * it hold and use in future 
 * 100000 lines of code  
 */

const boundGreet = user.greet.bind(user);
boundGreet() //bound this user
const boundGreet2 = user.greet.bind(user2);
boundGreet2(); //bound this user2