// let name = prompt("Enter your Name: ")
// let message = alert("Welcome!" + name)
// console.log(name)

// function printAlert() {
//     alert("Welcome to my sight")
// }

// printAlert();
function calculateResult(){
let userNumber = document.getElementById('number').value
// console.log(userNumber)
let calc =  userNumber / 750 * 100
if (calc >= 80 ) {
    alert("A+")
} else if(calc >= 70 ) {
    alert("A")
} else if(calc >= 60) {
    alert("B")
} else if(calc >= 50) {
    alert("C")
} else{
    alert("Fail")
}
}