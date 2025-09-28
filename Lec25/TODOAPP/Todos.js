const path = require('path');
const todos = require('./models/todos');
const { model } = require('mongoose');
class Todos{
    static async addTodo(task,description){
        try{
            let newTodo ={
                task,
                description
            }
            await todos.create(newTodo);
            return "new todo added successfully"
        } catch(error){
            throw new Error("unable to add a todo")
        }
    }
    static async getTodos(){
        try{
            let data = await todos.find({});
            return data;
        } catch(error){
            throw new Error("unable to fetch todos");
        }
    }
    static async getTodo(id){
        try{
            let todo = await todos.findOne({
                _id:id
            })
            return todo;
        } catch(error){
             throw new Error("unable to fetch a todo");
        }
    }
    static async deleteTodo(id){
        try{
            let todo = await todos.deleteOne({
                _id:id
            })
            return "todo deleted successfully"
        } catch(error){
            throw new Error("Unable to delete a todo");
        }
    }
}
module.exports = Todos;