// Synchronous and Asynochronous task

const task1 = function(){
    console.log("task1");
}
// heavy task in b/w so delay result because Synronous 
const heavytask = function(){
    console.log("Heavy tast started in sync manner")
    const start = Date.now()// epoch time 1jan1970 utc
    while(Date.now() - start<5000){
        //do nothing
    }
    console.log("heavytast ended ");
}


// use Asyn/ SetTimeout
const heavytaskNonblocking = function(){
    console.log("asyn task skipping it for now")
    setTimeout(function(){
        console.log("asyn task done")
    },3000)
}
const task2 = function(){
    console.log("task2");
}

// task1()
// heavytask(); // task2 result delay 
// task2();


// task1()
// heavytaskNonblocking()
// task2()




// callback is help in Asynchronous 


const data = []
const fetchResponseBlocking = function(){
    console.log("mimicking a sync api call ")
    const start = Date.now()
    while(Date.now()-start<3000){
        //do nothing 

    }
    console.log("Api call done!")
    data.push({id:1, name:"john"})

}

const fetchResponseNonBlocking = function(render){ // render is CALLBACK here
    console.log("mimicking a sync api call ")
    const start = Date.now()
    setTimeout(function(){
    console.log("Api call done!")
    data.push({id:1, name:"john"});
    render()
    },5000)

}


const renderResponse = function(){
console.log("Rendering the response")
console.log(data[0].name)
}



//fetchResponseBlocking() // 3 sec
//fetchResponseNonBlocking() // 5 sec 
//settimeount solve synchronous but seconde funtion depend on a first funcion
// data[0].name

//fetchResponseNonBlocking(renderResponse)
//renderResponse()

// mix sync & async 


task1() // print 
fetchResponseNonBlocking(renderResponse);
task2()// print before complete execution fetchresponse
// output 
 /**task1
mimicking a sync api call 
task2
Api call done!
Rendering the response
john

  */





