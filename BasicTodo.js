const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
  
app.use(bodyParser.json());

let todo = []

app.get('/todos', (req,res) =>{
    res.json(todo);
})

app.get('/todos/:id', (req,res) =>{
    let todoItem = todo.find(item => item.id === parseInt(req.params.id));
    if(!todoItem)
    {
        res.status(404).send()
    }
    else{
    res.json(todoItem);
    }
})

app.post('/todos', (req,res) =>{
    const newTodoItem = {
        id: Math.floor(Math.random()*100000),
        title: req.body.title,
        description: req.body.description
    }
    todo.push(newTodoItem);
    res.status(201).json(newTodoItem);
})

app.put('/todos/:id', (req,res) =>{
    const index = todo.findIndex(item => item.id === parseInt(req.params.id))
    if(index === -1)
    {
        res.status(404).send()
    }
    else{
    todo[index].title = req.body.title;
    todo[index].description = req.body.description;
    res.json(todo[index]);
    }
})

app.delete('/todos/:id' ,(req,res) => {
    const index = todo.findIndex(item => item.id === parseInt(req.params.id))
    if(index === -1){
        res.status(404).send()
    } 
    else{
    todo.splice(index, 1);
    res.status(200).send("Item deleted")
    }
})

app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(3000);
module.exports = app;
