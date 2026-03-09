let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks))
}

function addTask(){

let taskInput=document.getElementById("taskInput").value
let dueDate=document.getElementById("dueDate").value
let category=document.getElementById("category").value

if(taskInput==="") return

let task={
text:taskInput,
date:dueDate,
category:category,
completed:false
}

tasks.push(task)

saveTasks()
displayTasks()

document.getElementById("taskInput").value=""
}

function displayTasks(){

let taskList=document.getElementById("taskList")
taskList.innerHTML=""

tasks.forEach((task,index)=>{

let li=document.createElement("li")

if(task.completed){
li.classList.add("completed")
}

li.innerHTML=`
<span>
<b>${task.text}</b>
<br>
${task.category} | ${task.date}
</span>

<div>
<button onclick="completeTask(${index})">✔</button>
<button onclick="deleteTask(${index})">🗑</button>
</div>
`

taskList.appendChild(li)

})

}

function completeTask(index){

tasks[index].completed=!tasks[index].completed

saveTasks()
displayTasks()

}

function deleteTask(index){

tasks.splice(index,1)

saveTasks()
displayTasks()

}

function toggleDarkMode(){
document.body.classList.toggle("dark")
}

displayTasks()