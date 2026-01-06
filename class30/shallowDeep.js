const zoo = {
    name : "Amazing Zoo",
    location: "Melbourne australia",
    animals:[
    {
        species :"Lions",
        favoriteTreat:"😋"
    },
    {
        species :"Panda",
        favoriteTreat :"🍫"
    }
],
// greet : function (){
//     console.log(`Welcome to ${this.name}`)
// } //not printing because function , undefined not in deep copy 

}

const shallowCopy = {...zoo}

shallowCopy.location = "Kerala India"
shallowCopy.animals[0].favoriteTreat = "🧆"
// console.log(zoo);
// console.log(shallowCopy);

// console.log(zoo === shallowCopy) //because both have different memory location 


/**
 * 
 * in case of == 2 step process first type coersion then data compare
 * 
 * console.log(2 === "2"); //it strict type checker 
console.log(2 == "2"); //it type coercion then compare value 
 */



//deep Copy is done using JSON.parse(JSON.Stringfy(Object));
const zooString = JSON.stringify(zoo);
// console.log(zooString);
const deepCopy = JSON.parse(zooString);
console.log(deepCopy)



// deepCopy.animals[0].favoriteTreat = "🌯🌯"
// console.log(zoo.animals) //no changes 
// console.log(deepCopy.animals) 
// console.log(zoo.animals === deepCopy) //false beacuse refrence data type always different memory location 