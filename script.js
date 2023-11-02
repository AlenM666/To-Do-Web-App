const task = document.getElementById("task");
const addTask = document.getElementById("addTask");
const list = document.getElementById("taskList");
const error = document.getElementById("error");


//add task to display
addTask.addEventListener('click', function(){
    const taskText = task.value.trim();

    if(taskText !== ''){
        const listItem = document.createElement('li');

        listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
        `;

        //delete
        listItem.querySelector(".delete").addEventListener('click', function(){
            list.removeChild(listItem);
        })

        list.appendChild(listItem);
        task.value = '';
        error.textContent = '';

    }else if(taskText == '') {
        error.textContent = "Enter a task!";
        setTimeout(() => {
            error.textContent = '';
        }, 2500);
    }
})









