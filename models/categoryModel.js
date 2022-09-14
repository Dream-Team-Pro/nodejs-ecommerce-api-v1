const mongoose = require("mongoose");

// 1- Create Schema
const CategorySchema = new mongoose.Schema({
    name: String,
});

// 2- Create Model
const CategoryModel = mongoose.model("Prod", CategorySchema);

exports.mod