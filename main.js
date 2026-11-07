console.log("Hello from main.js!");
// Variable declarations — MY details
let myName = "Blessing wambui";           
let myAge = 19;                        
const myBirthYear = 2007;              
const isStudent = true;                
const favoriteColors = ["blue", "green", "purple"];  
const today = new Date();              

// typeof checks
console.log("typeof myName:", typeof myName);
console.log("typeof myAge:", typeof myAge);
console.log("typeof isStudent:", typeof isStudent);

// Descriptive logs
console.log(`Hi, my name is ${myName}.`);
console.log(`I am ${myAge} years old.`);
console.log(`Am I a student? ${isStudent}`);
console.log(`My favorite colors: ${favoriteColors.join(", ")}`);
console.log(`Today is: ${today.toDateString()}`);
// ===== TASK 7.2 =====
// Number operations
let a = 10;
let b = 3;
console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
console.log("Mod:", a % b);
console.log("Pow:", a ** b);

// String operations
let firstName = "Blessing";           
let lastName = "Wambui";             
let fullName = `${firstName} ${lastName}`;
console.log(`Hello, ${firstName}!`);
console.log(`${firstName} has ${firstName.length} letters.`);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Blessing Wambui")); 

// Comparison & logical
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);
console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge: age in days/hours, year turning 100
const daysOld = myAge * 365;
const hoursOld = daysOld * 24;
const yearTurning100 = myBirthYear + 100;
console.log(`I'm approximately ${daysOld} days old.`);
console.log(`That's about ${hoursOld} hours.`);
console.log(`I'll turn 100 in the year ${yearTurning100}.`);
// ===== TASK 7.3 =====
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(x, y) {
    return x + y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Arrow with body
const divide = (x, y) => {
    if (y === 0) return "Cannot divide by zero";
    return x / y;
};

// Exercise 2: Build functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Default params
function greet2(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Tip calculator
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// Test them
console.log(greet("Friend"));
console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(calculateArea(5, 4));
console.log(celsiusToFahrenheit(25));
console.log(isEven(4), isEven(7));
console.log(getInitials("Blessing Wambui"));  
console.log(reverseString("hello"));
console.log(greet2());
console.log(calculateTip(1000));       
console.log(calculateTip(1000, 20));   

// ===== TASK 7.4 =====
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

// Program 1: 1-100
console.log("--- Numbers 1-100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Program 2: evens 1-50
console.log("--- Evens 1-50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

// Program 3: FizzBuzz 1-100
console.log("--- FizzBuzz ---");
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Program 4: Star triangle
console.log("--- Star Triangle ---");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
// ===== MINI-PROJECT: CALCULATOR =====
function addCalc(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiplyCalc(a, b) { return a * b; }
function divideCalc(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}
function modulus(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a % b;
}
function power(a, b) { return a ** b; }

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return addCalc(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiplyCalc(num1, num2);
        case "/": return divideCalc(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

// Tests
console.log("--- Calculator Tests ---");
console.log(calculate(10, "+", 5));   
console.log(calculate(10, "-", 5));   
console.log(calculate(10, "*", 5));   
console.log(calculate(10, "/", 5));   
console.log(calculate(10, "/", 0));   
console.log(calculate(10, "%", 3));   
console.log(calculate(2, "**", 8));   