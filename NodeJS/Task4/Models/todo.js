const mongoose = require('mongoose')
const Todo = mongoose.model('Todo',{
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    body:{
        type:String 
    },
    status:{
        type:String,
        enum:['DONE','INPROGRESS','PENDING'],
        default:'PENDING'
    }
})

module.exports = Todo