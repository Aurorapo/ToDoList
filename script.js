const todoList = [];        

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
            <div class="todo-item">
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-todo-button js-delete-todo-button">Delete</button>
            </div>           
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        Event.preventDefault();
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');    
    const name = inputElement.value;                            

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value; 
    
    if (name.trim() && dueDate.trim() !== '') {
        todoList.push({
            name,
            dueDate
        });
        console.log(todoList);
    
        inputElement.value = ''; 
        dateInputElement.value = '';
        
        renderTodoList();
    } else {
        alert('Please enter a task.');
    }
}