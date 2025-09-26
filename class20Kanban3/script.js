//DOM selection
//add btn popup so text box show
const addBtn = document.querySelector(".add-btn");
const modelCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const textArea = document.querySelector(".textArea-cont");
const allPriorityColors = document.querySelectorAll(".priority-color")
// create removeBtn and need flagBtn
const removeBtn = document.querySelector(".remove-btn")
const alltickets = document.querySelectorAll(".ticket-cont");
//color filter
const toolboxColors = document.querySelectorAll(".color");


//Local Variable

let addTaskFlag = false;
let modelPriorityColor="black";
let removeTaskFlag = false;
const lockClose = "fa-lock";
const lockOpen = "fa-lock-open";
const colors = ['lightpink','lightgreen','lightblue','black'];
const ticketsArr = JSON.parse(localStorage.getItem("tickets")) || [];


//event handlers
addBtn.addEventListener("click",function(){
    addTaskFlag = !addTaskFlag;
    if(addTaskFlag == true){
        modelCont.style.display = "flex";
    }else{
        modelCont.style.display = "none";
    }
})

toolboxColors.forEach(function(colorElem){
    colorElem.addEventListener("click",function(){
        const selectedColor = colorElem.classList[0];
        console.log(selectedColor);
        const alltickets = document.querySelectorAll(".ticket-cont");
        alltickets.forEach(function(ticket){
            const ticketcolorBand = ticket.querySelector(".ticket-color");
            if(ticketcolorBand.style.backgroundColor === selectedColor){
                ticket.style.display = "block";
            }else{
                ticket.style.display = "none";
            }
        });
    });
    colorElem.addEventListener("dblclick",function(){
        const alltickets = document.querySelectorAll(".ticket-cont");
        alltickets.forEach(function(ticket){
            ticket.style.display = "block";
        });
    });
});


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
    const id = ticket.querySelector(".ticket-id").innerText;
    ticket.addEventListener("click",function(){
        if(!removeTaskFlag) return;
        else{
            ticket.remove();
            const ticketIdx = getTicketIDx(id);
            ticketsArr.splice(ticketIdx,1);
            updatelocalStorage();
        }
    });
}
alltickets.forEach(function(ticket){
    handleRemoval(ticket);
});


function handleLock(ticket){
    const ticketLockElem = ticket.querySelector(".ticket-lock");
    const ticketLockIcon = ticketLockElem.children[0];
    const ticketTaskArea = ticket.querySelector(".task-area");
    const id = ticket.querySelector(".ticket-id").innerText;
    ticketLockIcon.addEventListener("click",function(){
        const ticketIdx = getTicketIDx(id);
        if(ticketLockIcon.classList.contains(lockClose)){
            ticketLockIcon.classList.remove(lockClose);
            ticketLockIcon.classList.add(lockOpen);
            ticketTaskArea.setAttribute("contenteditable","true"); //change containeditable true;
        }else{
            ticketLockIcon.classList.remove(lockOpen);
            ticketLockIcon.classList.add(lockClose);
            ticketTaskArea.setAttribute("contenteditable","false"); //change containeditable true;
        }
        ticketsArr[ticketIdx].taskContent = ticketTaskArea.innerText;
        updatelocalStorage();
    });
}

//function handler for color Change
function handleColorChange(ticket){
    const ticketcolorBand = ticket.querySelector(".ticket-color");
    const id = ticket.querySelector(".ticket-id").innerText;
    ticketcolorBand.addEventListener("click",function(){
        const ticketIdx = getTicketIDx(id);
        let currentColor = ticketcolorBand.style.backgroundColor;
        let currentColorindx = colors.indexOf(currentColor); // help to find index of current color
        // let currentColorindx = colors.findIndex(function(color){
        //     return currentColor == color;
        // })
        currentColorindx++;
        const newTicketColorIndx = currentColorindx % colors.length;
        const newTicketColor = colors[newTicketColorIndx];
        // ticketcolorBand.classList.remove(currentColor);
        // ticketcolorBand.classList.add(newTicketColor);
        ticketcolorBand.style.backgroundColor = newTicketColor;
        ticketsArr[ticketIdx].ticketColor = newTicketColor;
        updatelocalStorage();
    })
}

//ticket create when addBtn click
function createTicket(ticketColor,taskContent,ticketId){
 
    let ticketCont = document.createElement("div");

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
    handleLock(ticketCont,ticketId);
    handleColorChange(ticketCont);
}


//Add listner On Model / popup
modelCont.addEventListener("keydown",function(e){
    if(e.key === "Shift"){
        const taskContent = textArea.value;
        // const ticketId = shortid(); // if package required or unique Id need
        let ticketId = Math.random().toString(36).substring(2,9);

        /***
        console.log(ticketId);
        
         * Math.random return 0to1 decimal number
         * toString(36) create alphanumeric value
         * substring(2,7) means 2 to 7 so return 5 char unique id
         */
        createTicket(modelPriorityColor,taskContent,ticketId);
        modelCont.style.display = "none";
        textArea.value ="";
        addTaskFlag = false;

        //update in Local storage
        ticketsArr.push({ticketId,taskContent,ticketColor:modelPriorityColor});
        // localStorage.setItem("tickets",JSON.stringify(ticketsArr));
        updatelocalStorage();
    }
})

//funtion init to getting data from local storage
function init(){
    if(localStorage.getItem("tickets")){
        ticketsArr.forEach(function(ticket){
            createTicket(ticket.ticketColor,ticket.taskContent,ticket.ticketId);
        })
    }
}
init();

//update through ticketid
function getTicketIDx(id){
    const ticketIdx = ticketsArr.findIndex(function(ticketObj){
        return ticketObj.ticketId === id;
    })
    return ticketIdx;
}

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
    colorElement.addEventListener("click",function(){
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








// //use Local storage 
// //use JSON.stringify({name :"Ashish",age:24}) for store String
// //json string convert to back to string 
// localStorage.setItem("user",JSON.stringify({name :"Ashish",age:24}));
// const userObj = JSON.parse(localStorage.getItem("user"));
// console.log("userDb",userObj);
// localStorage.removeItem("user"); //sychronous Api

// localStorage.clear();



function updatelocalStorage(){
    localStorage.setItem("tickets",JSON.stringify(ticketsArr));
}