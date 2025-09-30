const categoriesContainer = document.getElementById('categories');
/**
 * bhai parent par listener lagane se vo text link image sbko event listener karega
 * uske liye restrict krna padega ki sruf product A, Product P ko listener kare baki ko skip kare
 * is features ka name hi event Delegation hain 

categoriesContaine.addEventListener("click",function(event){
 const clickElement = event.target;
 console.log(clickElement);
})

*/
categoriesContainer.addEventListener("click",function(event){
 const clickElement = event.target;
 //console.log(clickElement);
 if(clickElement.classList.contains("product")){
    // console.log("productclicked", clickElement);
    const parent = clickElement.parentElement;
    const category = parent.querySelector("h2").textContent;
    console.log("Category :- " , category);
    const product = clickElement.textContent;
    console.log(`Clicked on ${product} in the category of ${ca}`);
 };
})