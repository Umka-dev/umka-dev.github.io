// Newsletter subscription form
const input = document.querySelector('input');
console.log(input.value);

function subscribedSuccess(event) {
    event.preventDefault()
    alert("Your address " + input.value + " was subscribed to the newsletter!");
};

const button = document.getElementById("btn");
button.addEventListener("click", subscribedSuccess);