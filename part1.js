// Prints a message to the console and also shows it on the page
function log(text, boxId) {
  console.log(text);
  document.getElementById(boxId).textContent += text + "\n";
}

// ===== Task 0. First Script =====
const studentName = "Your Full Name";   // write your name here
const studentGroup = "Your Group";      // write your group here

log("Name: " + studentName, "output1");
log("Group: " + studentGroup, "output1");

document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Hello, JavaScript World!");
});

// ===== Task 1. Variables & Operators =====
// Data types
let city = "Astana";        // string
let a = 15;                 // number
let b = 4;                  // number
let isStudent = true;       // boolean

log("city = " + city + " (" + typeof city + ")", "output2");
log("a = " + a + " (" + typeof a + ")", "output2");
log("isStudent = " + isStudent + " (" + typeof isStudent + ")", "output2");

// Arithmetic operations
log("a + b = " + (a + b), "output2");
log("a - b = " + (a - b), "output2");
log("a * b = " + (a * b), "output2");
log("a / b = " + (a / b), "output2");
log("a % b = " + (a % b), "output2");

// String concatenation
let firstName = "John";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
log("Full name: " + fullName, "output2");
log(`${fullName} lives in ${city}`, "output2");
