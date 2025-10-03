const Task = require('../database/Schema/taskSchema');

const createTask = async(req, res)=>{
    const {title, description, dueDate} = req.body;
    if(!title || !description || !dueDate){
        return res.status(400).json({message: "Title, Description and Due Date are required"});
    }
    const newTask = new Task({
        title,
        description,
        dueDate,
        userId: req.user.id
    });
    await newTask.save();
    res.status(200).json({message: "Task Created Successfully", task: newTask});
}

const getTasks = async(req, res)=>{
    const tasks = await Task.find({userId: req.user.id});
    res.status(200).json({tasks});
}

module.exports = {createTask, getTasks};