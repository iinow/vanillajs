const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter((todo) => {
        return todo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}

function something(toDo){
    paintToDo(toDo.text)
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something);   
    }
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    if(text.length == 0){
        return;
    }
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init()