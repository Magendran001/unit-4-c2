
const { default: mongoose } = require("mongoose");

const masterschema = new mongoose.Schema({



    balance: { type: Number, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    branch_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "branch" },


},
    {
        timestamps: true,
    })
module.exports = mongoose.model("master", masterschema)
