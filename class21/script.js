const grandparent = document.querySelector('#grandParent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');




//add eventListner for bubbling phase 
grandparent.addEventListener("click", function(){
    console.log('Grand parent bubbling');
})

parent.addEventListener("click",function(){
    console.log("parent div bubbling");
})

child.addEventListener("click",function(){
    console.log("child div bubbling");
})


//add eventlister for capturing phase 
grandparent.addEventListener("click", function(){
    console.log('Grand parent capturing');
},true)

parent.addEventListener("click",function(event){
    console.log("parent div capturing");
    event.stopPropagation();
},true)

child.addEventListener("click",function(){
    console.log("child div capturing");
},true)



/**
 * Stop event propogataion
 */
 
// grandparent.addEventListener("click", function(){
//     console.log('Grand parent click');
// })

// parent.addEventListener("click",function(event){
//     console.log("parent div click");
//     event.stopPropagation();
// })

// child.addEventListener("click",function(){
//     console.log("child div click");
//     // event.stopPropagation(); //stop propagation
// })