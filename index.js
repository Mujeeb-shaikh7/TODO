let tasks=[]
const taskList=document.getElementById('list');
const taskInput=document.getElementById('add');
console.log('hehe');

function addToDom(task)
{
    const li=document.createElement('li');

    li.innerHTML=
    `
    
    <input type="checkbox" id="${task.id}" class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>
    <box-icon name='message-alt-x' type='solid' color='#ba0a0a' class="delete" data-id="${task.id}"></box-icon>
    <img src="./message-alt-x-solid-24.png" class="delete" data-id="12" />
    
    `
    taskList.append(li);
    
}
function renderList(){
    taskList.innerHTML='';
    for(let i=0;i<tasks.length;i++)
    {
        addToDom(tasks[i]);
    }
}

function deleteTask(taskId){
    let newTasks=tasks.filter(function(task){
        return task.id!=taskId
    })

    tasks=newTasks;
    renderList();
    showNotification("Task deleted successfullly")
}

function addTask(task){
    if(task){
        tasks.push(task);
        renderList();
        showNotification("Task aded succesfully")
    }
}

function showNotification(text){
    alert(text)
}

function handleInput(e){
    if(e.key==='Enter'){
        const text=e.target.value;
        if(!text){
            showNotification("Empty ra pumks");
            return;
        }
        const task={
            text,
            id:Date.now().toString(),
            done:false
        }
        e.target.value=''
        console.log(task);

        addTask(task);
    }
}

document.addEventListener('keyup',handleInput);