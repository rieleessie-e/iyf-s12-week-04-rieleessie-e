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

// ===== TASK 8.1: ARRAYS =====
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();

// Array methods
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const firstEven = numbers.find(n => n % 2 === 0);
const sum = numbers.reduce((t, n) => t + n, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("First even:", firstEven);
console.log("Sum:", sum);
console.log("Includes 3?", numbers.includes(3));

// Build tasks
const testArr = [1, -2, 3, -4, 5, 12, 15];

// 1. Double all
const allDoubled = testArr.map(n => n * 2);
console.log("All doubled:", allDoubled);

// 2. Filter negatives
const positives = testArr.filter(n => n >= 0);
console.log("No negatives:", positives);

// 3. First > 10
const firstOver10 = testArr.find(n => n > 10);
console.log("First > 10:", firstOver10);

// 4. Product of all
const product = testArr.reduce((p, n) => p * n, 1);
console.log("Product:", product);

// ===== TASK 8.2: OBJECTS =====
const person = {
    firstName: "Blessing",          
    lastName: "Wambui",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "gaming"],
    address: {
        city: "YourCity",
        country: "YourCountry"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 21;
person.phone = "1234567890";
delete person.isStudent;

// Object methods
const calcObj = {
    add: function(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply: (a, b) => a * b
};
console.log(calcObj.add(5, 3));

// Iteration
const scores = { math: 95, english: 88, science: 92 };
console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// ===== TASK 8.3: ARRAY OF OBJECTS =====
const students = [
    { name: "Kofi", age: 22, grade: 85, major: "CS" },
    { name: "Zara", age: 20, grade: 72, major: "Math" },
    { name: "Tunde", age: 23, grade: 90, major: "CS" },
    { name: "Amani", age: 21, grade: 88, major: "Physics" },
    { name: "Nia", age: 22, grade: 95, major: "CS" }
];

const names = students.map(s => s.name);
const highAchievers = students.filter(s => s.grade > 80);
const foundStudent = students.find(s => s.name === "Tunde");
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
const csMajors = students.filter(s => s.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some(s => s.grade > 90);
const allPassing = students.every(s => s.grade >= 60);

console.log("Names:", names);
console.log("High achievers:", highAchievers.map(s => s.name));
console.log("Found:", foundStudent);
console.log("Average grade:", avgGrade);
console.log("CS majors:", csMajors.map(s => s.name));
console.log("Sorted:", sortedByGrade.map(s => `${s.name}:${s.grade}`));
console.log("Any > 90?", hasTopStudent);
console.log("All passing?", allPassing);