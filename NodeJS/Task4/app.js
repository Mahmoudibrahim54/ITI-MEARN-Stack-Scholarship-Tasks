require ('./db_connection')
const express = require('express')
const app = express()
const port = 8000
const Todo = require('./models/todo');


app.use(express.json())
app.use('/assets',express.static("./resources"))


app.get('/todo',(req,res)=>{
    Todo.find({})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})
app.get('/todo/:id', (req, res) => {
    let id = req.params.id;
    Todo.findById(id)
    .then(result => res.status(200).json(result))
    .catch(error => response.status(500).json(error))
});
app.post('/todo',(req,res)=>{
    let {body} = req;
    const todo = new Todo(body)
    todo.save()
    .then((result)=>{
        console.log(result)
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
    console.log(todo)
})
app.delete('/todo/:id',(req,res)=>{
    let id = req.params.id
    Todo.deleteOne({"_id":id})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })


})
app.delete('/todo',(req,res)=>{
    
    Todo.deleteMany({})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })


})
app.put('/todo/:id',(req,res)=>{
    let id = req.params.id
    let newRec = {
        "title":req.body.title,
        "status":req.body.status
    }
    console.log(newRec)
    Todo.updateOne({"_id":id},newRec)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })


})
app.patch('/todo/:id',(req,res)=>{
    let id = req.params.id
    let newRec = {
        "title":req.body.title
    }
    console.log(newRec)
    Todo.updateOne({"_id":id},newRec)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })


})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


