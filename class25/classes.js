//constructing a class
//constructors are special methods for creating and initializing an object created with a class
//constructors always use the keyword 'constructor' and capital letter for class name

class MyClass{ //class declaration , MyClass is a class name
    constructor(name){ //constructor method 
        this.name = name;
    }
    static myStaticMethod(){ //static method of the class
        //static method declaration
        console.log("This is a static method.");
    }
    myMethod(){ //method of the class
        //method declaration
        console.log(`Hello, ${this.name}!`);
    }
}

//MyClass.myStaticMethod(); //calling static method without creating an object








class Pizza{
    static totalPizzasMade = 0; //static property of the class
    constructor(topping, size, crustType){ //constructor method
        this.topping = topping;
        this.size = size;
        this.crustType = crustType;
        Pizza.totalPizzasMade += 1; //incrementing static property
    }

    describe(){ //method of the class
        console.log(`This is a ${this.size} size pizza with ${this.topping} topping and ${this.crustType} crust.`);
    }
    static calculateTotalPizzasMade(){ //static method of the class
        console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
    }
}

//const custumer1 = new Pizza("mushroom", "large", "thin");   //creating an object of the class
///custumer1.describe(); //Pizza { topping: 'mushroom', size: 'large', crustType: 'thin' }



//Inheritance in class
//child class = parent class+ extra features
//extends keyword is used to create a child class from a parent class
class StuffedCrustPizza extends Pizza{ //subclass extending the Pizza class

    constructor(topping, size, crustType, stuffingType){
         //constructor method
         super(topping, size, crustType); //calling parent class constructor
         this.stuffingType = stuffingType; //extra property of the subclass 
    }

    describeStuffedCrust(){ //method of the subclass
        console.log(`this pizza has ${this.stuffingType} stuffing in the crust.`);
    }   
    describe(){ //overriding the parent class method
        super.describe(); //calling parent class methodt
        this.describeStuffedCrust(); //calling subclass method
    }
}

const custumer2 = new StuffedCrustPizza("pepperoni", "medium", "stuffed", "cheese"); //creating an object of the subclass

//custumer2.describe(); 
//This is a medium size pizza with pepperoni topping and stuffed crust.
//this pizza has cheese stuffing in the crust.






//after break start 

const specialOrder2 = new StuffedCrustPizza(["cheese","pepperoni"], "medium","thin", "cheese and tikki");

const specialOrder3 = new StuffedCrustPizza(["mushroom","onion","peppers"], "large","thick", "stuffed", "cheese and tikki");

//Pizza.calculateTotalPizzasMade(); //Total pizzas made: 3

//specialOrder2.describe();








//public and private properties/ method in class



//public properties and methods are accessible from outside the class
class NamePerson{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

person1 = new NamePerson("Ashish");
//console.log(person1.getName()); //Ashish
//console.log(person1.name); //Ashish also accessible directly

person1.name = "Avinash"; // changing public property directly
//console.log(person1.getName()); //Avinash



//private properties and methods are not accessible form outside the class
class SecretPerson{
    #secretName; //private property also initialize with #

    constructor(name){
        this.#secretName = name;
    }
    getSecretName(){ //public method to access private property
        return this.#secretName;
    }

}

person2 = new SecretPerson("Rahul");
//console.log(person2.getSecretName()); //Rahul
//console.log(person2.#secretName); //SyntaxError

person2.name = "Ramesh"; // cannot change private property directly
//console.log(person2.getSecretName()); //Rahul still unchanged





