// fs module is used to interact with the file System

const fs = require('fs');


console.log("starting")

// const content = Math.random().toString(36).repeat(10000000);
// fs.writeFileSync('file1.txt',content)


// file read a synchronous manner file1 then file2
// const data1 = fs.readFileSync('file1.txt');
// console.log("data of file 1", data1.toString());

// const data2 = fs.readFileSync('file2.txt')
// console.log("data of file2", data2.toString());


// this file read in Asynchronous manner 
// using callback 
// file2 then file1 because file2 is short 
fs.readFile('file1.txt',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log("data of file 1", data.toString())
    }
});

fs.readFile('file2.txt', function(err, data){
    if(err){
        console.log(err)
    }else{
        console.log("data of file2", data.toString());
    }
})















