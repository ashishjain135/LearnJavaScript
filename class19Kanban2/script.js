//add btn popup so text box show
const addBtn = document.querySelector(".add-btn");

const modelCont = document.querySelector(".modal-cont");

const mainCont = document.querySelector(".main-cont");
let addTaskFlag = false;

const textArea = document.querySelector(".textArea-cont");
const allPriorityColors = document.querySelectorAll(".priority-color")

let modelPriorityColor="black";

// create removeBtn and need flagBtn
const removeBtn = document.querySelector(".remove-btn")
let removeTaskFlag = false;

const alltickets = document.querySelectorAll(".ticket-cont");


addBtn.addEventListener("click",function(){
    addTaskFlag = !addTaskFlag;
    if(addTaskFlag){
        modelCont.style.display = 'flex';
    }else{
        modelCont.style.display = "none";
    }
})


//when click on remove btn remove selected task
removeBtn.addEventListener("click",function(){
   removeTaskFlag = !removeTaskFlag;
   if(removeTaskFlag){
    alert("Delete Button is Activated");
    removeBtn.style.color = "Red";
   }else{
    removeBtn.style.color ="white";
   }
})

function handleRemoval(ticket){
    ticket.addEventListener("click",function(){
        if(!removeTaskFlag) return;
        ticket.remove();
    });
}
alltickets.forEach(function(ticket){
    handleRemoval(ticket);
})






//ticket create when addBtn click
function createTicket(ticketColor,ticketId,taskContent){
 
    const ticketCont = document.createElement("div");

    //set the class attribute of the ticket container 
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color" style="background-color:${ticketColor}"></div>
        <div class="ticket-id">${ticketId}</div>
        <div class="task-area"> ${taskContent}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;

    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont);
}


//Add listner On Model / popup
modelCont.addEventListener("keydown",function(e){
    if(e.key === "Shift"){
        const taskContent = textArea.value;
        // const ticketId = shortid(); // if package required or unique Id need
        const ticketId = Math.random().toString(36).substring(2,7);

        /***
        console.log(ticketId);
        
         * Math.random return 0to1 decimal number
         * toString(36) create alphanumeric value
         * substring(2,7) means 2 to 7 so return 5 char unique id
         */
        createTicket(modelPriorityColor,ticketId,taskContent);
        modelCont.style.display = "none";
        textArea.value ="";
        addTaskFlag = false;
    }
})


//active color using each in array
// for(let i = 0; i<allPriorityColors.length; i++){
//     allPriorityColors[i].addEventListener("click",function(e){
//         //some functionality
//         let color = e.target.classList[i];
//         console.log(color);
//     })
// }

allPriorityColors.forEach(function(colorElement){
    //some funcitonality with the priorityColor
    colorElement.addEventListener("click",function(e){
       // console.log("clicked on color");
       //remove active class form all priority color
       allPriorityColors.forEach(function(priorityElem){
        priorityElem.classList.remove("active");
       })
    //    add Active class for clicked element 
       colorElement.classList.add("active");
       modelPriorityColor = colorElement.classList[0];

    })
})
