// logging

// console.log(500)

// string
// console.log("hello there nice to meet you", 500)

// Variables
// const greeting = "hello there nice to meet you"
// console.log(greeting)

// const myName = "Tanya"

// let myAge = 39

// console.log(myAge)

// myAge = 40

// console.log(myAge)

// concatenation
// console.log("Hello my name is " + myName + " and I am " + myAge + " years old")

// alerting
// alert("Hello there");

// prompting
// const userName = prompt("What is your name?");

// alert("Hello there " + userName + " !");

// fuctions
// function sayHello(name) {
//     alert("Hello there " + name + "!");
// }

// sayHello(userName);

// button action
function sayHello() {
    const userName = prompt("What is your name?");
        alert("Hello there " + userName + "!");
    }

const button = document.getElementById("btn");
button.addEventListener("click", sayHello);
