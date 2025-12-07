const taskList = document.getElementById('list');


function updateTodos(data) {
    // data: [{id, task}]
    taskList.innerText = '';
    data.forEach(d => {
        let li = document.createElement('li');
        // li.innerText = d.task;
        li.innerHTML =
            `<span class='task-name'>${d.task}</span>
            <button class='delete-btn'>❌</button>`
        li.setAttribute('id', d.id);
        li.setAttribute('class', 'task-item');
        taskList.appendChild(li);
    })
}
taskList.addEventListener('click', ev => {
    let className = ev.target.getAttribute('class');
    if (className == 'task-name' || className == 'task-item') {
        let id = ev.target.getAttribute('id');
        if (!id) {
            id = ev.target.parentElement.getAttribute('id');
        }
        fetch(`/todo/${id}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err)
            })
    }
    else if (className == 'delete-btn') {
        let id = ev.target.parentElement.getAttribute('id');
       
        fetch(`/todo-delete/${id}`)
            .then((res) =>{
               //console.log(res.json)
               return res.json()
            } )
            .then(data => {
                //console.log(data);
                updateTodos(data);
                
            }).catch(err => {
                console.log(err)
            })
    }


})




fetch('/todos')
    .then((res)=>{
         return res.json()
    })
    .then(data=>{
        console.log(data)
        updateTodos(data)
    })
