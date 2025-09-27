const decrementBtn = document.getElementById('decrement');

const incrementBtn = document.getElementById('increment');
const countDisplay = document.getElementById('count');
const resetButton = document.getElementById('reset');

let count = 0;

decrementBtn.addEventListener("click",function(){
    if(count >0){
        count--;
        countDisplay.textContent = count;
    }
})

incrementBtn.addEventListener("click",function(){
    count++;
    countDisplay.textContent = count;
})

resetButton.addEventListener("click",function(){
    count = 0;
    countDisplay.textContent = count;
})