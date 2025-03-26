
function changeText() {
    let heading = document.getElementById("heading");
    heading.innerHTML = "You changed the text!";
    heading.style.color = "red"; 
}

function toggleElement() {
    let box = document.getElementById("box");
    box.classList.toggle("hidden"); 
}

function changeStyle() {
    document.body.classList.toggle("dark-mode");
}