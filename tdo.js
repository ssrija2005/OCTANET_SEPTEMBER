document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Add new task on button click
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        addTaskToDOM(taskText);
        taskInput.value = ''; // Clear input field after adding task
    });

    // Function to add task to DOM
    function addTaskToDOM(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskList.appendChild(li);

        // Add event listeners for complete and delete buttons
        const completeButton = li.querySelector('.complete-btn');
        const deleteButton = li.querySelector('.delete-btn');

        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });
    }
});
