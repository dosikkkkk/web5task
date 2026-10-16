// ===== Task 5. Mouse Events =====
const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {
  mouseBox.style.backgroundColor = "orange";
});

mouseBox.addEventListener("mouseout", function () {
  mouseBox.style.backgroundColor = "lightblue";    // original color
});

// ===== Task 6. Keyboard Events =====
const textInput = document.getElementById("textInput");
const typedText = document.getElementById("typedText");

textInput.addEventListener("keyup", function () {
  typedText.textContent = textInput.value;
});

// ===== Task 7. Calculator =====
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const calcResult = document.getElementById("calcResult");

document.getElementById("calcBtn").addEventListener("click", function () {
  if (num1.value === "" || num2.value === "") {
    calcResult.textContent = "Enter both numbers";
    return;
  }

  const x = Number(num1.value);
  const y = Number(num2.value);
  let result;

  if (operation.value === "+") {
    result = x + y;
  } else if (operation.value === "-") {
    result = x - y;
  } else if (operation.value === "*") {
    result = x * y;
  } else if (operation.value === "/") {
    if (y === 0) {
      calcResult.textContent = "Cannot divide by zero";
      return;
    }
    result = x / y;
  }

  calcResult.textContent = result;
});
