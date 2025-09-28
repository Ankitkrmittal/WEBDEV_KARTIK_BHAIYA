const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const PORT = 4444;
const path = require('path');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));

let Todos = [
    {
        id: 1,
        task: "Buy groceries",
        description: "Pick up milk, eggs, bread, and vegetables from the store."
    },
    {
        id: 2,
        task: "Finish project report",
        description: "Complete the final draft of the project report and email it to the manager."
    },
    {
        id: 3,
        task: "Call the plumber",
        description: "Schedule an appointment to fix the leaking kitchen sink."
    },
    {
        id: 4,
        task: "Workout",
        description: "Do a 30-minute cardio session and some light stretching."
    },
    {
        id: 5,
        task: "Read a book",
        description: "Read at least 20 pages of the new novel before bed."
    }
];

app.get('/', async(req, res) => {
    try {
        let todos = await Todos.getTodos();
        res.render('index', { todos });
    } catch (error) {
        res.render('error', {
            error
        })
    }
})

app.get('/todos/:id', async(req, res) => {
    const { id } = req.params;
    // const data = todos.filter(todo => todo.id == +id);
    try {
        let data = await Todos.getTodo(id);
        res.render('index', {
            todos: data
        })
    } catch (error) {
        res.render('error', {
            error
        })
    }
})

app.get('/delete-todo/:id', async(req, res) => {
    const { id } = req.params;
    // todos = todos.filter(todo => todo.id != +id);
    try {
        let msg = await Todos.deleteTodo(id);
        console.log(msg);
        res.redirect('/');
    } catch (error) {
        res.render('error', {
            error
        })
    }
})

app.post('/todos', async(req, res) => {
    const { task, description } = req.body;
    try {
        let msg = await Todos.addTodo(task,description);
        console.log(msg);

        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.render('error', {
            error
        })
    }
})


app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})