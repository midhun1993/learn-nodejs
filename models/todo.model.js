const mongoose = require("mongoose");
// read more on  here: https://mongoosejs.com/docs/guide.html#definition
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  }, 
  description: String,
  date: { type: Date, default: Date.now }
});

const TodoModel = mongoose.model('Todo', todoSchema, "todos");
module.exports = TodoModel;