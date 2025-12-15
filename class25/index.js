//class25 js18 OOPs2 discussion on constructor function and new keyword
//this ma mtlb current object jiska reference hume mil rha h
//new keyword se hum constructor function ko call krte h jisse ek naya object bnta h
//constructor function ka naam capital letter se start hota h ye convention h

function pizza(topping, size, crusType) { //constructor function
    this.topping = topping;
    this.size = size;
    this.crusType = crusType;

    this.describe = function() {
        console.log(`This is a ${this.size} size pizza with ${this.topping} topping and ${this.crusType} crust.`);
    }
}

const pizza1 = new pizza("mushroom", "large", "thin");
const pizza2 = new pizza("onion", "medium", "thick");
const custumer1 = new pizza(["pepperoni", "small"], "stuffed","messy"); //extra argument will be ignored


// pizza1.describe(); // This is a large size pizza with mushroom topping and thin crust.
// pizza2.describe(); // This is a medium size pizza with onion topping and thick crust.
custumer1.describe(); // This is a small size pizza with pepperoni topping and stuffed crust.


































