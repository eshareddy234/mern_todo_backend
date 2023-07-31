const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    console.log("hiiiiii")
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader(  
  "Access-Control-Allow-Headers",  
  "Origin, X-Requested-With, Content-Type, Accept");  
res.setHeader("Access-Control-Allow-Methods",  
    "GET, POST, PATCH, DELETE, OPTIONS");  
    const todo = await ToDoModel.find();
    res.send(todo);
    
}

module.exports.saveToDo = (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader(  
  "Access-Control-Allow-Headers",  
  "Origin, X-Requested-With, Content-Type, Accept");  
res.setHeader("Access-Control-Allow-Methods",  
    "GET, POST, PATCH, DELETE, OPTIONS");  
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader(  
  "Access-Control-Allow-Headers",  
  "Origin, X-Requested-With, Content-Type, Accept");  
res.setHeader("Access-Control-Allow-Methods",  
    "GET, POST, PATCH, DELETE, OPTIONS");  
    const { _id } = req.body;

    console.log('id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader(  
  "Access-Control-Allow-Headers",  
  "Origin, X-Requested-With, Content-Type, Accept");  
res.setHeader("Access-Control-Allow-Methods",  
    "GET, POST, PATCH, DELETE, OPTIONS");  
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}
