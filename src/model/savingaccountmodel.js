
const { default: mongoose } = require("mongoose");

const savingschema = new mongoose.Schema({
    account_number: { type: String, required: true, unique: true },

    interestRate: { type: Number, required: true },
    balance: { type: Number, required: true },
    master_id: { type: mongoose.Schema.Types.ObjectId, ref: "master", required: true }


},
    {
        timestamps: true,
    })
module.exports = mongoose.model("saving", savingschema)

