const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  text.textContent = "The text was changed by JavaScript!";
});

const styleBox = document.getElementById("styleBox");
const colors = ["#ffe066", "#a5d8ff", "#b2f2bb", "#ffc9c9", "#d0bfff", "#ffffff"];
let colorIndex = 0;
let fontSize = 16;

document.getElementById("colorBtn").addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;  
  styleBox.style.backgroundColor = colors[colorIndex];
});

document.getElementById("sizeBtn").addEventListener("click", function () {
  fontSize = fontSize + 4;
  if (fontSize > 40) {
    fontSize = 16;                               
  }
  styleBox.style.fontSize = fontSize + "px";
});

const itemList = document.getElementById("itemList");
let itemNumber = 0;

document.getElementById("addItemBtn").addEventListener("click", function () {
  itemNumber = itemNumber + 1;
  const li = document.createElement("li");        
  li.className = "list-group-item";
  li.textContent = "Item " + itemNumber;
  itemList.appendChild(li);                       
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
  const last = itemList.lastElementChild;          
  if (last) {
    itemList.removeChild(last);
    itemNumber = itemNumber - 1;
  }
});
