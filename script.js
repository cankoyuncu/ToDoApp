const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const searchBox = document.getElementById("search-box");

searchBox.addEventListener("input", function() {
    const searchText = searchBox.value.toLowerCase();
    const allTasks = listContainer.querySelectorAll("li");

    allTasks.forEach(function(task) {
        const taskText = task.innerText.toLowerCase();
        if (taskText.includes(searchText)) {
            task.style.display = "block"; 
        } else {
            task.style.display = "none"; 
        }
    });
});