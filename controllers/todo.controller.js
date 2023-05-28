const fs = require("fs"); 
const todoModel = require("../models/todo.model");
module.exports = {
    getList: async function(req, res, next) {
        try {
            let resp = await todoModel.find();
            res.status(200).json(resp);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    create: async function(req, res, next) {
        try {
            const todoItem = req.body;
            let resp = await todoModel.create(todoItem);
            res.status(201).json(resp);
            next();
        } catch (err) {
            res.error = err;
            next();
        }
    },
    delete: function(req, res, next) {
        res.send("deleted");
    },
    edit: function(req, res, next) {
        res.send("edit completed");
    }
}