
const { default: mongoose } = require("mongoose");

const branchschema = new mongoose.Schema({
    branch_name: { type: String, required: true },

    address: { type: String, required: true },
    MICR: { type: Number, required: true },
    IFSC: { type: String, required: true },

},
    {
        timestamps: true,
    })
module.exports = mongoose.model("branch", branchschema)