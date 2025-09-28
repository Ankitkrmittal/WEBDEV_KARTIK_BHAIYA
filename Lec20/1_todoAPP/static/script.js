const taskList = document.querySelector('.taskList')

function updateTodo(data) {
    taskList.innerText ='';
    data.forEach(d => {
        let li = document.createElement('li');
        li.innerHTML = 
        `<span class= 'task-name'>${d.task}</span>
        <button class ='delete-btn'>❌</button>`
        li.setAttribute('id',d.id);
        li.setAttribute('class','task-item');
        taskList.appendChild(li);
    });
}
fetch('/todos')
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
        updateTodo(data);
    })


taskList.addEventListener('click',ev =>{
    let className = ev.target.getAttribute('class');
    if(className == 'task-name' || className == 'task-item'){
        let id = ev.target.getAttribute('id');
        if(!id){
           id = ev.target.parentElement.getAttribute('id');
        }
        fetch(`/todo/${id}`)
          .then((res)=>res.json)
          .then(data=>{
              console.log(data);

          }).catch(err=>{
            console.log(err);
          })

    }
    else if(className = 'delete-btn'){
        let id = ev.target.parentElement.getAttribute('id');
        fetch(`/todo-delete/${id}`)
           .then((res)=>res.json())
           .then(data=>{
            updateTodo(data);
           }).catch(err=>{
             console.log(err);
           })
    }
    
})



/*
taskList.addEventListener('click', ev => {
    // console.log(ev);
    console.log(ev.target);
    // dekho is element ke pass id hai ya nhi hai?
    // let id = ev.target.getAttribute('id');
    let fetchItem = ev.target.getAttribute('id') != undefined;
    console.log(fetchItem)
    // console.log(id);
    if (id) {
        // Toh backend se data fetch karlo, sahi element par click kia hai user 
        // ne inside the taskList
        fetch(`/todo/${id}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err)
            })
    }
})
*/

