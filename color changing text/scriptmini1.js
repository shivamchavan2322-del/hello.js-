const heading = document 
.getElementById("heading");
const redBtn = document
.getElementById("red-btn");
const blueBtn = document
.getElementById("blue-btn");
redBtn.addEventListener("click", function() {
    heading.style.color = "red";
});
blueBtn.addEventListener("click", function() {
    heading.style.color = "blue";
});