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