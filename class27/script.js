const alice = {
    nickname: "Alice",
    age: 28,
    introduce: function() {
        console.log(`Hi, I'm ${this.nickname}, I'm ${this.age} years old.`);
    }
}

const button = document.getElementById('introduceButton');
const boundIntroduce = alice.introduce.bind(alice);
// button.addEventListener('click',alice.introduce);
//show undefined because this refers to the button element

//so we need to bind the context of this to alice object
button.addEventListener('click', boundIntroduce);