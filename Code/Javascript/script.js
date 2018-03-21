// //var firstName = prompt("What's your first name?");
// //var lastName = prompt("What's your last name?");
// var age = prompt("What's your age?");
// //console.log("Your full name is " + firstName + " " + lastName);
// //console.log("You are " + age + " years old");
// var leapYears = (age - (age % 4))/4;
// var daysAlive = (leapYears * 366) + ((age - leapYears)*365);
// console.log("You are " + daysAlive + " days old");

// var daysAlive = age * 365.25;
// console.log("You are " + daysAlive + " days old");


// for (var i = 5; i <= 50; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log(i);
//     }
// }

// function isEvent(x) {
//     if (x % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function factorial(x) {
//     if (x == 0) {
//         return 1;
//     } else {
//         return factorial(x - 1) * x;
//     }
// }

// function kebabToSnake(str) {
//     return str.replace(/-/g, "_");
// }

var quit = false;
var toDo = [];
while (!quit) {
    var command = prompt("What you would like to do?");
    if (command === "new") {
        // var newToDo = prompt("Enter a new todo");
        toDo.push(prompt("Enter a new todo"));
    } else if (command === "list") {
        console.log(toDo);
    } else {
        quit = true;
    }
}