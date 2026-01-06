// const falsyValues = [false, 0, -0, "", undefined, NaN];

// falsyValues.forEach((value) => {
//     if(value){
//         console.log(`${value} is truthy`);
//     }else{
//         console.log(`${value} is falsy value`)
//     }
// })



//truthy values
const truthyValues = [true, -1, 1, "0"," ", "false", "true", {}, [], function(){}];

truthyValues.forEach((value) => {
    if(value){
        console.log(`${value} is truthy`);
    }else{
        console.log(`${value} is falsy value`)
    }
})
