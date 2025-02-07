let inputBox=document.getElementById("input-box");
let addBtn=document.getElementById("add-button");
let toDoContiner=document.getElementById("task-List-continer");
var events;

function addToDo(){
    let inputData=inputBox.value.trim();
    console.log(inputData);
    if(inputData.length<=0){
     alert("Enter a Task")
    }
    else{ 
        if(addBtn.innerHTML==="Edit"){
            events.target.previousElementSibling.innerHTML=inputData;
            inputBox.value="";
            addBtn.innerHTML="add"
        }
        else{
            let taskList=document.createElement("li");
        let tasks=document.createElement("p");
        let editBtn=document.createElement("button");
        let deleteBtn=document.createElement("button");
        editBtn.id="edit"
        deleteBtn.id="delete"
        tasks.innerHTML=inputData;
        editBtn.innerHTML="Edit";
        deleteBtn.innerHTML="Delete";
        taskList.appendChild(tasks);
        taskList.appendChild(editBtn);
        taskList.appendChild(deleteBtn);
        toDoContiner.appendChild(taskList);
        inputBox.value="";
        }
    }
}

function updateTodo(e){
   // console.log(e.target);
    if(e.target.innerHTML==="Delete"){
        e.target.parentElement.remove();
    }
    else if(e.target.innerHTML==="Edit"){
        // console.log(e.target.previousElementSibling.innerHTML);
        inputBox.value=e.target.previousElementSibling.innerHTML;
        addBtn.innerHTML="Edit";
        events=e;
    }
}
addBtn.addEventListener('click',addToDo)
toDoContiner.addEventListener('click',updateTodo)







// assignment
// employee form 
// id 
// name
// salary
// role
// doj

// and create table and edit and delete 