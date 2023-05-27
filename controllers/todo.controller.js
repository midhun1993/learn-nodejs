const fs = require("fs"); 
module.exports = {
    getList: function(req, res, next) {
        fs.readFile('./db/todo.json', 'utf8',function (err, data){
            res.status(200).json(JSON.parse(data));
        });
    },
    create: function(req, res, next) {
        const todoItem = req.body;
        fs.readFile('./db/todo.json', 'utf8',function (err, data){
            const todoList = JSON.parse(data);
            todoList.push(todoItem);
            fs.writeFile('./db/todo.json', JSON.stringify(todoList), function(err, data){
                res.send("created");
            })
        });
        
    },
    delete: function(req, res, next) {
        res.send("deleted");
    },
    edit: function(req, res, next) {
        res.send("edit completed");
    }
}