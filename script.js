document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
    }
});
