const taskmodel = require ('../models/taskmodel')

// To create a Task - POST
const createtask = async (req, res) => {
    const {title,description} = req.body

    try{
        const task = await taskmodel.create({title,description})
    }
    catch (e){

    } 
}