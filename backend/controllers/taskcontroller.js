const mongoose = require('mongoose');
const taskmodel = require ('../models/taskmodel')

// To create a Task - POST
const createtask = async (req, res) => {
    const {title,description} = req.body;

    try{
        const task = await taskmodel.create({title,description});
        res.status(200).json(task);
    }
    catch (e){
        res.status(400).json({error:e.message});
    } 
};

//To get all tasks - GET

const gettasks = async (req,res) => {
    try{
        const tasks = await taskmodel.find({});
        res.status(200).json(tasks)
    }
    catch (e) {
        res.status(400).json({error: e.message})
    }
}

// To get a single task - GET

const getsingletask = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error:'Task Not Found'})
    }
    try{
        const singletask = await taskmodel.findById(id)
        res.status(200).json(singletask)
    }
    catch (e){
        res.status(400).json({error: e.message});
    }
};

// To update a task - PATCH

const updatetask = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error:'Task Not Found'})
    }

    try {
        const task = await taskmodel.findByIdAndUpdate({
            _id:id
        },
    {
        ...req.body
    }) 
    res.status(200).json(task);
    }

    catch (e){
        res.status(400).json({error : e.message})
    }
}


// // To DELETE a task - DELETE

const deletetask = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error:'Task Not Found'})
    }

    try {
        const task = await taskmodel.findByIdAndDelete(id);
        res.status(200).json(task)
    }
    catch (e){
        res.status(400).json({error : e.message})
    }
};

module.exports = {createtask, gettasks, getsingletask, updatetask, deletetask}; 