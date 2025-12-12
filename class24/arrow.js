//normal function 
const add1 = function(a,b){
    var a = 10;
    //const val = a +b+y;
    return a+b;
}

//arrow function
const add2 = (a,b) => {
    //const a = 10;
    const val = a +b+y;
    return a+b;
}



const double = function(x){
    return x*2;
}

const doubleArrow = x => x*2;



//document.getElementById("add").addEventListener("click", function(){
    //console.log(add1); //points to the button element
//});

//document.getElementById("add").addEventListener("click", () => {
   // console.log(add2); //points to the window object
//});


//see example 
const joe ={
    nickname: "joe",
    eventuallySayName: function(){
        function acutallySayName(){
            console.log(`first normal: ${this.nickname}`);
        }
        const acutallySayNameWithArrow =() =>{
            console.log(`second arrow: ${this.nickname}`)
        };
        setTimeout(acutallySayName, 1000);
        setTimeout(acutallySayNameWithArrow, 1000);
    },
    arrow :() =>{
        console.log(`arrow: ${this.nickname}`); //undefined
    }, 
    regular: function(){
        console.log(`regular: ${this.nickname} `); //joe
    }
}
joe.arrow();
joe.regular(); //method invocation

joe.eventuallySayName();