const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, option: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true, default: "Female" },
    type: { type: String, required: true, default: "Customer" }
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("user", userschema)