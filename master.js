// Prepare Variables
let inputTask = document.querySelector("input") ; 
let addBtn = document.getElementById("btn-add") ; 
let tasksToDo = document.querySelector(".tasks-to-do")

// Functions Factory 

function createTask(){
    let li = document.createElement("li") ;
    let span = document.createElement("span") ;  
    span.textContent = inputTask.value ; 
    li.appendChild(span) ; 
    let delBtn = document.createElement("button") ; 
    delBtn.className = "btn-delete" ; 
    delBtn.innerText = "Delete" ; 
    li.appendChild(delBtn) ; 
    tasksToDo.appendChild(li) ; 
}


// Add Tasks
function addTask(){
    addBtn.onclick = ()=>{
        if(inputTask.value == "") {
            alert("Write Your Task First") ; 
        }else{
            createTask();
            inputTask.value = "" ;  
        }
        inputTask.focus() ; 
        deleteTask();
    }   
}

function deleteTask(){
    let delBtn = document.querySelectorAll(".btn-delete") ;
    if ( document.querySelectorAll(".btn-delete").length != 0){
        delBtn.forEach((btn)=>{
            btn.addEventListener("click",()=>{
                btn.parentElement.remove()
            })
        })
    }
}

/* ----------------------------------------------------------*/




window.onload = ()=>{
    inputTask.focus()
}

addTask(); 






