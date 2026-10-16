function log(text, boxId) {
  console.log(text);
  document.getElementById(boxId).textContent += text + "\n";
}

const studentName = "Your Full Name";   
const studentGroup = "Your Group";    

log("Name: " + studentName, "output1");
log("Group: " + studentGroup, "output1");

document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Hello, JavaScript World!");
});

let city = "Astana";        
let a = 15;               
let b = 4;              
let isStudent = true;       

log("city = " + city + " (" + typeof city + ")", "output2");
log("a = " + a + " (" + typeof a + ")", "output2");
log("isStudent = " + isStudent + " (" + typeof isStudent + ")", "output2");

log("a + b = " + (a + b), "output2");
log("a - b = " + (a - b), "output2");
log("a * b = " + (a * b), "output2");
log("a / b = " + (a / b), "output2");
log("a % b = " + (a % b), "output2");

let firstName = "Dossymzhan";
let lastName = "Rashadinov";
let fullName = firstName + " " + lastName;
log("Full name: " + fullName, "output2");
log(`${fullName} lives in ${city}`, "output2");
