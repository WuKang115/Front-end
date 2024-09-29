document.addEventListener('DOMContentLoaded', loadTasks); // 页面加载时加载任务

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText) {
        const li = createTaskElement(taskText);
        document.getElementById('task-list').appendChild(li);
        saveTask(taskText); // 保存任务到本地存储
        taskInput.value = ''; // 清空输入框
    }
});

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // 添加标记完成的功能
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        updateLocalStorage(); // 更新本地存储
    });

    // 创建删除按钮
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '删除';
    deleteButton.classList.add('delete-task');
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        li.remove(); // 删除任务项
        updateLocalStorage(); // 更新本地存储
    });

    li.appendChild(deleteButton); // 把删除按钮添加到列表项中
    return li; // 返回任务项
}

function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // 获取已有任务
    tasks.push(taskText); // 添加新任务
    localStorage.setItem('tasks', JSON.stringify(tasks)); // 保存回本地存储
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const li = createTaskElement(taskText);
        document.getElementById('task-list').appendChild(li);
    });
}

function updateLocalStorage() {
    const tasks = [];
    const listItems = document.querySelectorAll('#task-list li');

    listItems.forEach(item => {
        tasks.push(item.textContent.replace('删除', '').trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks)); // 更新本地存储
}
