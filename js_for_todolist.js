const todoList = [];

function addTodo() {

    const inputElement = document.getElementById("todoName");
    const dateElement = document.getElementById("todoDate");

    const name = inputElement.value;
    const dueDate = dateElement.value;

    if (name === "" || dueDate === "") {
        alert("Please fill all fields.");
        return;
    }

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = "";
    dateElement.value = "";

    renderTodoList();
}

function renderTodoList() {

    let todoHTML = ``;

    for (let i = 0; i < todoList.length; i++) {

        const todoObject = todoList[i];

        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        todoHTML += `

   <div> ${name}</div>
     <div>${dueDate}</div>
        <div><button onclick="deleteTodo(${i}) class="delete-button"  style="background-color: red; color: white;">
            Delete
        </button></div>
`;
    }

document.getElementById("todoList").innerHTML = todoHTML;
    
}

function deleteTodo(index) {

    todoList.splice(index, 1);

    renderTodoList();
}