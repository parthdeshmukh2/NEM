const express = require('express');
const fs = require('fs')

const app = express();

app.use(express.json());

app.get('/todo/get' , (req, res)=>{
    const data =fs.readFileSync('./db.json', 'utf-8' );
    const parsed = JSON.parse(data);
    res.send(parsed.todos);
})

app.post('/todo/post', (req, res)=>{
    const body = req.body;
    //console.log(body);
   const data = fs.readFileSync('./db.json','utf-8' );
   const parsed = JSON.parse(data);
   const todo = parsed.todos;
   todo.push(body);
   const latest = JSON.stringify(parsed);
  const updated=  fs.writeFileSync('./db.json',latest, 'utf-8');    
res.send(updated)

})

app.put('/todo/put', (req, res)=>{
    const id = req.body.id;
    const newTodo = req.body;
   const result= fs.readFileSync('./db.json', 'utf-8');
    const prevData = JSON.parse(result);
    const todoList = prevData.todos;
    const newTodoData = todoList.map((elem)=>{
        if(elem.id===id) return {...newTodo};
        else return elem
    })
    prevData.todos = newTodoData;
    fs.writeFileSync('./db.json', JSON.stringify(prevData), 'utf-8'),
    res.send("New Todo Successfull");
})

app.patch('./todo/patch', (req, res)=>{
    const id = req.body.id;
    const task = req.body.task;
   const data= fs.readFileSync('./db.json', 'utf-8');
   const prevData = JSON.parse(data);
   const todoList = prevData.todos;

   const newTodo = todoList.map((elem)=>{
       if(elem.id === id) return {...elem, task: task};
       else return elem;
   });
   prevData.todos = newTodo;
   fs.writeFileSync('./db.json', JSON.stringify(prevData), 'utf-8');
   res.send("Added Successfully")
})

app.delete('/todo/delete', (req, res)=>{
    const id = req.body.id;
    const data = fs.readFileSync('./db.json', 'utf-8');
    const prevData = JSON.parse(data);
    const todoList = prevData.todos;

    const newTodo = todoList.filter((elem)=> elem.id !== id);
     prevData.todos = newTodo;

     fs.writeFileSync('./db.json', JSON.stringify(prevData), 'utf-8');
     res.send("Deleted Successfully");
})


app.listen(8080);