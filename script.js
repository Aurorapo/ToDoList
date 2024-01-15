const todoList = [];        

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
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
    const inputElement = document.querySelector('.js-name-input');       //prende un elemento della classe js. e lo mette in js
    const name = inputElement.value;                            //value rappresenta il testo nel box testo

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;     //prende la data e la salva nella variabile
    
    if (name.trim() && dueDate.trim() !== '') {
        todoList.push({
            //name: name,
            //dueDate: dueDate,
            name,
            dueDate
        });                //lo aggiunge all'array
        console.log(todoList);
    
        inputElement.value = '';            //resetta il testo nel box testo dopo aver scritto qualcosa
        dateInputElement.value = '';
        
        renderTodoList();                   //per far vedere di nuovo la lista sulla pagina
    } else {
        alert('Please enter a task.');
    }
}