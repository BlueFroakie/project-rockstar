const addTaskBtn = document.querySelector("input[value='Add Task']");
const clearTasksBtn = document.querySelector(".clear-tasks");
const newTask = document.querySelector("#task");
const list = document.querySelector("ul.collection");
const bodyNode = document.body;
let tasks = ['Task to do'];

/* Load tasks on start */

const initialData = localStorage.getItem('tasks') ? localStorage.getItem('tasks').split(',') : localStorage.setItem('tasks', tasks);
tasks.push(initialData);
if(initialData) {
    initialData.forEach(task => {
        const newItem = document.createElement("li");
        newItem.setAttribute("class", "collection-item");
        newItem.innerHTML = `${task} <a class="delete-item secondary-content"><i class="fa fa-times"></i></a>`;
        list.appendChild(newItem);
        localStorage.setItem('tasks', initialData);
        console.log(tasks, initialData);
    });
};

/* Filter tasks */

const filterBar = document.querySelector('#filter-input');
filterBar.addEventListener('keyup', e => {
    const filterText = e.target.value.toLowerCase();
    const taskList = list.getElementsByTagName('li');
    Array.from(taskList).forEach(task => {
        const taskText = task.textContent;
        taskText.toLowerCase().indexOf(filterText) != -1 ? task.style.display = 'block' : task.style.display = 'none';
    });
});

/* Add tasks */

addTaskBtn.addEventListener('click', e => {
    e.preventDefault(); 
    if(newTask.value.length > 0) {
        const newItem = document.createElement("li");
        newItem.setAttribute("class", "collection-item");
        newItem.innerHTML = `${newTask.value} <a class="delete-item secondary-content"><i class="fa fa-times"></i></a>`;
        list.appendChild(newItem);
        tasks.push(newTask.value);
        localStorage.setItem('tasks', tasks);
    };    
});

/* Remove individual task */

bodyNode.addEventListener("click", e => {
    if (e.target.parentElement.classList.contains("delete-item")) {
        const taskIndex = tasks.indexOf(e.target.parentElement.parentElement.innerText); 
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', tasks);
        e.target.parentElement.parentElement.remove();
      };
});

/* Remove all tasks */

clearTasksBtn.addEventListener('click', e => {
    e.preventDefault(); 
    const listItems = document.querySelectorAll(".collection-item");
    listItems.forEach(task => task.remove());
    tasks = [];
    localStorage.removeItem('tasks');
});
