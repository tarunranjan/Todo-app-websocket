const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    "title" : String
});

const todos = mongoose.model('todos',todoSchema);

module.exports = todos;