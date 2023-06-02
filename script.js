const inputBox = document.getElementById("input__box")
const list = document.getElementById("list__container")

function addTask() {
    if(inputBox.value === '') {
        alert("Please add an item.")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        list__container.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list__container.innerHTML);
}

function showTask() {
    list__container.innerHTML = localStorage.getItem("data");
}
showTask()