// Selectors
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filterOption = document.getElementById("filter");

// Events
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", handleAction);
filterOption.addEventListener("change", filterTodo);

// Add Todo
function addTodo(e) {
    e.preventDefault();

    if (taskInput.value.trim() === "" || dateInput.value === "") {
        alert("Please fill both task and date!");
        return;
    }

    const li = document.createElement("li");
    li.className =
        "flex justify-between items-center bg-slate-700 px-4 py-3 rounded-lg";

    const text = document.createElement("span");
    text.textContent = `${taskInput.value} (${dateInput.value})`;
    li.appendChild(text);

    const btnGroup = document.createElement("div");
    btnGroup.className = "flex gap-2";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.className =
        "bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600";
    btnGroup.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className =
        "bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600";
    btnGroup.appendChild(deleteBtn);

    li.appendChild(btnGroup);
    todoList.appendChild(li);

    taskInput.value = "";
    dateInput.value = "";
}

// Complete + Delete
function handleAction(e) {
    if (e.target.textContent === "Delete") {
        e.target.closest("li").remove();
    }

    if (e.target.textContent === "Done") {
        const item = e.target.closest("li");
        item.classList.toggle("line-through");
        item.classList.toggle("opacity-50");
        item.classList.toggle("completed");
    }
}

// Filter
function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(todo => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                todo.classList.contains("completed")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none");
                break;
            case "uncompleted":
                !todo.classList.contains("completed")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none");
                break;
        }
    });
}