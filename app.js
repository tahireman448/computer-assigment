// app.js





// 1. Sum, Subtraction, Multiplication, Division
let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));

document.write("<h3>1. Calculator Operations</h3>");
document.write("Sum: " + (a + b) + "<br>");
document.write("Subtraction: " + (a - b) + "<br>");
document.write("Multiplication: " + (a * b) + "<br>");

if (b !== 0) {
    document.write("Division: " + (a / b) + "<br><br>");
} else {
    document.write("Cannot divide by zero<br><br>");
}


// 2. Even or Odd
let num = parseInt(prompt("Enter a number:"));

document.write("<h3>2. Even or Odd</h3>");

if (num % 2 === 0) {
    document.write(num + " is Even<br><br>");
} else {
    document.write(num + " is Odd<br><br>");
}


// 3. Voting Eligibility
let age = parseInt(prompt("Enter your age:"));

document.write("<h3>3. Voting Eligibility</h3>");

if (age >= 18) {
    document.write("Eligible for voting<br><br>");
} else {
    document.write("Not eligible for voting<br><br>");
}


// 4. Array Sum using Loop
let numbers = [];
let total = 0;

document.write("<h3>4. Sum of 5 Numbers</h3>");

for (let i = 0; i < 5; i++) {
    let value = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(value);
    total += value;
}

document.write("Total Sum: " + total + "<br><br>");


// 5. Palindrome Check
let str = prompt("Enter a string:");
let reversed = str.split("").reverse().join("");

document.write("<h3>5. Palindrome Check</h3>");

if (str === reversed) {
    document.write(str + " is a Palindrome<br><br>");
} else {
    document.write(str + " is Not a Palindrome<br><br>");
}


// 6. Largest of 3 Numbers
function largest(x, y, z) {
    return Math.max(x, y, z);
}

let n1 = parseInt(prompt("Enter first number:"));
let n2 = parseInt(prompt("Enter second number:"));
let n3 = parseInt(prompt("Enter third number:"));

document.write("<h3>6. Largest Number</h3>");
document.write("Largest Number: " + largest(n1, n2, n3) + "<br><br>");


// 7. Even Numbers from 1 to 20
document.write("<h3>7. Even Numbers from 1 to 20</h3>");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + " ");
    }
}

document.write("<br><br>");


// 8. Factorial Program
let factNum = parseInt(prompt("Enter a number for factorial:"));
let factorial = 1;

for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}

document.write("<h3>8. Factorial</h3>");
document.write("Factorial of " + factNum + " is " + factorial + "<br><br>");


// 9. Reverse Order Names
let names = [];

document.write("<h3>9. Names in Reverse Order</h3>");

for (let i = 0; i < 5; i++) {
    let name = prompt(`Enter name ${i + 1}:`);
    names.push(name);
}

for (let i = names.length - 1; i >= 0; i--) {
    document.write(names[i] + "<br>");
}

document.write("<br>");


// 10. Password Strength Check
let password = prompt("Enter password:");

document.write("<h3>10. Password Strength</h3>");

if (password.length < 8) {
    document.write("Weak Password");
} else {
    document.write("Strong Password");
}