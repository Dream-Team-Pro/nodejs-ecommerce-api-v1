const mongoose = require("mongoose");

// 1- Create Schema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category required"],
        unique: [true, "Category must be unique"],
        minLength: [3, "Too Short Category Name"],
        maxLength: [32, "Too Long Category Name"],
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: String,
}, { timestamps: true });

// 2- Create Model
const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;