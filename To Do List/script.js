const todoip = document.getElementById("todoip");
const add = document.getElementById("add");
const todolist = document.getElementById("todolist");

add.addEventListener("click",addtodo);
todoip.addEventListener("keypress",function(e){
    if(e.key == 'Enter'){
        addtodo();
    }
});

function addtodo(){
    const todotext = todoip.value.trim();
    if(todotext !== '')
    {
        add.disabled = false;
        const li = document.createElement('li');
        li.textContent = todotext;
        todolist.appendChild(li);
        todoip.value = '';
    }
    else if (todotext == ''){
        add.disabled = true;
    } 
}