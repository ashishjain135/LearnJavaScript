const { json } = require("express/lib/response");

const toys = {
    toy1:{name:"Teddy Bear", color:"Red"},
    toy2:{name:"Doll", color:"pink"},
    toy3:{name:"Racing cars", color:"black"}
}
console.log(toys);
//wrap this data in box and digital world in JSON packing


//wrap in json
const toysJSONString = JSON.stringify(toys); //stringify convert object to json string
console.log(toysJSONString);


//unpacking to json to js Object
const unpackedToys = JSON.parse(toysJSONString);
console.log(unpackedToys);

//access specific content 
console.log(unpackedToys.toy1.name);