document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // 添加标记完成的功能
        li.addEventListener('click', function() {
            li.classList.toggle('completed'); // 点击时切换已完成状态
        });

        // 创建删除按钮
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '删除';
        deleteButton.classList.add('delete-task');
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation(); // 阻止点击事件冒泡
            li.remove(); // 删除任务项
        });

        li.appendChild(deleteButton); // 把删除按钮添加到列表项中
        document.getElementById('task-list').appendChild(li); // 将任务项添加到列表中
        taskInput.value = ''; // 清空输入框
    }
});
