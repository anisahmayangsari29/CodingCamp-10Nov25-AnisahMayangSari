const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const deleteAllBtn = document.getElementById("delete-all");
const tableBody = document.getElementById("todo-table");

let todos = [];

// Render Table
function renderTable() {
    tableBody.innerHTML = "";

    if (todos.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center py-4 text-gray-500">
                    No task found
                </td>
            </tr>`;
        return;
    }

    todos.forEach((todo, index) => {
        tableBody.innerHTML += `
            <tr class="border-b border-white/10">
                <td class="py-3">${todo.task}</td>
                <td>${todo.date}</td>
                <td class="${todo.completed ? 'text-green-400' : 'text-yellow-400'}">
                    ${todo.completed ? 'Completed' : 'Pending'}
                </td>
                <td class="flex gap-2 py-3">
                    <button onclick="toggleComplete(${index})"
                        class="px-3 py-1 rounded bg-green-600 hover:bg-green-700">
                        Done
                    </button>

                    <button onclick="deleteTodo(${index})"
                        class="px-3 py-1 rounded bg-red-600 hover:bg-red-700">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// Add Todo
addBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "" || dateInput.value === "") {
        alert("Please fill out both fields!");
        return;
    }

    todos.push({
        task: taskInput.value,
        date: dateInput.value,
        completed: false
    });

    taskInput.value = "";
    dateInput.value = "";

    renderTable();
});

// Toggle Complete
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTable();
}

// Delete Todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTable();
}

// Delete All
deleteAllBtn.addEventListener("click", () => {
    todos = [];
    renderTable();
});

// Initial
renderTable();