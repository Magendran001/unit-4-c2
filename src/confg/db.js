
const mongoose = require("mongoose");

const connnect = mongoose.connect("mongodb+srv://booksrelation:booksrelation001@cluster0.4xx5z.mongodb.net/booksrelation?retryWrites=true&w=majority")

module.exports = connnect