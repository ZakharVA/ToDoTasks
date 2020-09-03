let listTaks = document.querySelector('.list-tasks');
let btn = document.querySelector('.btn');

let inpTask = document.querySelector('.inp-task');

btn.addEventListener ('click', function() {
    inpTask.classList.toggle('disabled');
    inpTask.value = '';
});

inpTask.addEventListener ('keypress', function(keyPressed) {
    let keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        createNewTask();
    }
});

function createNewTask() {
    let task = document.createElement('div');
    task.classList.add('task');

    let checkOpen = document.createElement('div');
    checkOpen.classList.add('check--open');
    let taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    let nameTask = document.createElement('span');
    nameTask.classList.add('name-task--open');
    nameTask.append(inpTask.value);
    let btnTask = document.createElement('div');
    btnTask.classList.add('btn-task');

    let trash = document.createElement('input');
    trash.setAttribute('type', 'button');
    trash.classList.add('trash');
    let arrow = document.createElement('input');
    arrow.setAttribute('type', 'button');
    arrow.classList.add('arrow');

    btnTask.appendChild(trash);
    btnTask.appendChild(arrow);

    taskItem.appendChild(nameTask);
    taskItem.appendChild(btnTask);

    task.appendChild(checkOpen);
    task.appendChild(taskItem);

    listTaks.appendChild(task);

    inpTask.value = '';
    inpTask.classList.toggle('disabled');
}


